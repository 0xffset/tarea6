import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Page.css';
import ClimaContainer from '../components/ClimaContainer';

const Clima: React.FC = () => {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Clima</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Clima</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ClimaContainer/>
        </IonContent>
      </IonPage>
    );
  };
  
export default Clima;