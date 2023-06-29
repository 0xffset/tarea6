import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Page.css';
import AboutContainer from '../components/AboutContainer';
const About: React.FC = () => {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Acerca</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Acerca</IonTitle>
            </IonToolbar>
          </IonHeader>
          <AboutContainer/>
        </IonContent>
      </IonPage>
    );
  };
  
export default About;