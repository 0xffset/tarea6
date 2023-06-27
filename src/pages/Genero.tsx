import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

import './Page.css';
import GenderContainer from '../components/GenderContainer';

const Genero: React.FC = () => {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Genero</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Genero</IonTitle>
            </IonToolbar>
          </IonHeader>
          <GenderContainer/>
        </IonContent>
      </IonPage>
    );
  };
  
export default Genero;