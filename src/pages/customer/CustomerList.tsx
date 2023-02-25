import { IonButtons,
    IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonButton,
    IonItem,
    IonIcon
} from '@ionic/react';
import { add,
    pencil,
    close
} from 'ionicons/icons'
import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react'
import ExploreContainer from '../../components/ExploreContainer';
import {searchCustomers,
    removeCustomer,
} from './CustomerApi';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [])


  const search = () => {
    const result = searchCustomers();
    setClientes(result);
  }

  const remove = (id:string) => {
    removeCustomer(id);
    search();
  }

  const addCustomer = () => {
      history.push('/page/customer/new');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
        <IonTitle>Gestión de Clientes</IonTitle>
        
          <IonItem>
            <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Cliente
            </IonButton>
          </IonItem>

            <IonGrid className="table">
                <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Opciones</IonCol>
                </IonRow>

                { clientes.map((cliente:any) => 
                    <IonRow>
                    <IonCol>{ cliente.firstname } { cliente.lastname }</IonCol>
                    <IonCol>{cliente.email}</IonCol>
                    <IonCol>{cliente.phone}</IonCol>
                    <IonCol>
                        <IonButton color="warning" fill="clear">
                            <IonIcon icon={pencil} slot="icon-only"/>
                        </IonButton>
                        <IonButton onClick={() => remove(cliente.id)} color="danger" fill="clear">
                            <IonIcon icon={close} slot="icon-only"/>
                        </IonButton>
                    </IonCol>
                    </IonRow>
                ) }
            </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;

