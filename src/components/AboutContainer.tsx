import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from "@ionic/react";
import React, { useState, useEffect } from "react";




const AboutContainer : React.FC =()=> {
    return (
        <>
         <IonCard>
        <img width={200} height={200} alt="Silhouette of mountains" src="./profile.jpg" />
        <IonCardHeader>
        <IonCardTitle>Rogger G. Diaz</IonCardTitle>
        <IonCardSubtitle>Software Developer</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Si te gusta mi aplicacion, puedes contactarme en mis redes:</IonCardContent>

      <a href="https://www.linkedin.com/in/roleyder/" target="_blank"><IonButton fill="clear">Linkedin</IonButton></a>
    
      <a href="https://github.com/RolEYder" target="_blank">   <IonButton fill="clear">GitHub</IonButton>  </a>
    </IonCard>
        </>
    );
}

export default AboutContainer;