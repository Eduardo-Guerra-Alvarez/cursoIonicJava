
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
import { useParams } from 'react-router';
import { useEffect, useState } from 'react'

const CustomerEdit: React.FC = () => {

  const { name, id } = useParams<{ name: string; id: string; }>();
  const [clientes, setClientes] = useState<any>([]);

  useEffect(() => {
    search();
  }, [])


  const search = () => {
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
        <IonTitle>Gestión de Clientes {id}</IonTitle>

            
        
          <IonItem>
            <IonButton color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Guardar
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;

