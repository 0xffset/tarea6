import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, atCircleOutline, atSharp, bookmarkOutline, calendarNumberOutline, calendarNumberSharp, flagOutline, flagSharp, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, peopleOutline, peopleSharp, rainyOutline, rainySharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/genero',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Determinar Genero',
    url: '/page/genero',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Determinar Edad',
    url: '/page/edad',
    iosIcon: calendarNumberOutline,
    mdIcon: calendarNumberSharp
  },
  {
    title: 'Universidades de paises',
    url: '/page/pais',
    iosIcon: flagOutline,
    mdIcon: flagSharp
  },
  {
    title: 'Clima',
    url: '/page/clima',
    iosIcon: rainyOutline,
    mdIcon: rainySharp
  },
  {
    title: 'Wordpress',
    url: '/page/wordpress',
    iosIcon: atCircleOutline,
    mdIcon: atSharp
  },
  {
    title: 'Acerca de',
    url: '/page/acerca',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Rogger</IonListHeader>
          <IonNote>20209618@itla.edu.do</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
