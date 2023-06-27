import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import './Page.css';
import PaisContainer from '../components/PaisContainer';

const Pais: React.FC = () => {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Pais</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Pais</IonTitle>
            </IonToolbar>
          </IonHeader>
          <PaisContainer/>
        </IonContent>
      </IonPage>
    );
  };
  
export default Pais;