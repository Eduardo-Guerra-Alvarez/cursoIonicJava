
import { IonButtons,
    IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
    IonCol,
    IonRow,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonItem,
    IonIcon,
    IonLabel,
    IonInput
} from '@ionic/react';
import { 
    add,
    pencil,
    close,
    checkmark
} from 'ionicons/icons'
import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react'
import {saveCustomer, searchCustomerById} from './CustomerApi';

const CustomerEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();
  const [customer, setCustomer] = useState<any>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [])


  const search = () => {
      if(id !== 'new') {
          let result = searchCustomerById(id);
          setCustomer(result); 
        }
  }

  const save = () => {
      customer.id = Math.round(Math.random() * 10000);
      saveCustomer(customer);
      history.push('/page/customers');
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
            <IonCardHeader>
                <IonCardTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e => customer.firstname = e.detail.value} value={customer.firstname} placeholder="Enter text"></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Apellido</IonLabel>
                        <IonInput 
                        onIonChange={e => customer.secondname = e.detail.value} 
                        value={customer.secondname} placeholder="Enter text"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Emmail</IonLabel>
                        <IonInput 
                        onIonChange={e => customer.email = e.detail.value} 
                        value={customer.email} placeholder="Enter text"></IonInput>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Dirección</IonLabel>
                        <IonInput 
                        onIonChange={e => customer.direction = e.detail.value} 
                        value={customer.direction} placeholder="Enter text"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="6">
                    <IonItem>
                        <IonLabel position="stacked">Télefono</IonLabel>
                        <IonInput 
                        onIonChange={e => customer.phone = e.detail.value} 
                        value={customer.phone} placeholder="Enter text"></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>


            </IonCardContent>
          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                <IonIcon icon={checkmark} />
                Guardar
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;

