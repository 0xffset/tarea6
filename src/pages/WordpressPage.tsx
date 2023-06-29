import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Page.css';
import WordpressContainer from '../components/WordpressContainer';

const Wordpress: React.FC = () => {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Wordpress</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Wordpress</IonTitle>
            </IonToolbar>
          </IonHeader>
          <WordpressContainer/>
        </IonContent>
      </IonPage>
    );
  };
  
export default Wordpress;