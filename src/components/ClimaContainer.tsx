import React, { useState, useEffect } from "react";
import { Geolocation } from '@capacitor/geolocation';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle } from "@ionic/react";


const ClimaContainer: React.FC = () => {
  const [resultado, setResultado] = useState(Object);
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=23.325150&longitude=-101.735931&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")
      .then(async res => {
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setResultado(data);
        }
      })
  }, []);

  return (
    <>
      <IonCard color="primary">
        <IonCardHeader>
          <IonCardTitle>{resultado["current_weather"]["temperature"]}˚C</IonCardTitle>
          <IonCardSubtitle>Temperatura Actual</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>

    </>
  )
}

export default ClimaContainer;