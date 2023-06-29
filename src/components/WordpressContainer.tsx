import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from "@ionic/react";
import { today } from "ionicons/icons";
import React, { useState, useEffect } from "react";




const WordpressContainer: React.FC = () => {
    return (
        <>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Noticias mas recientes</IonCardTitle>
        <IonCardSubtitle>Propietario: Popular Science</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <a target="_blank" href="https://www.popsci.com/science/europa-clipper-name-signup/"> 
          <IonItem>
            <IonThumbnail slot="start">
              <img  alt="Silhouette of mountains" src="https://www.popsci.com/uploads/2023/06/28/Europa-Clipper-Propulsion-Module-.jpg" />
            </IonThumbnail>
            <IonLabel>How to get your name engraved on a NASA spacecraft bound for Europa</IonLabel>
          </IonItem>
          </a>

        <a target="_blank" href="https://www.popsci.com/science/exomars-mission-russia-ukraine/">
        <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://www.popsci.com/uploads/2023/06/21/01_Rosalind_Franklin.jpg" />
            </IonThumbnail>
            <IonLabel>How Russia’s war in Ukraine almost derailed Europe’s Mars rover</IonLabel>
          </IonItem>
        </a>

         <a target="_blank" href="https://www.popsci.com/diy/slack-canvas-how-to/">
         <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://www.popsci.com/uploads/2023/06/26/how-to-use-canvases-on-slack.jpg" />
            </IonThumbnail>
            <IonLabel>Slack rolled out fancy new features. Here’s how to use them.</IonLabel>
          </IonItem>
         </a>
        </IonList>
      </IonCardContent>
    </IonCard>
        </>
    );
}
export default WordpressContainer;