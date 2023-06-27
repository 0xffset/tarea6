import {
    IonButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonToast,
    IonList,
    IonItem,
    IonInput,
    IonText
} from "@ionic/react";
import { useState } from "react"
import styled from "styled-components";

const MyButton = styled(IonTitle)`
 .color-genero {
    color: blue;
 }
`; 

const GenderContainer: React.FC = () => {
    const [nombre, setNombre] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [resultado, setResultado] = useState("");
    const [genero, setGenero] = useState("");
    const [probabilidad, setProbabilidad] = useState(0.0);
    const [color, setColor] = useState("");
    const Calcular = () => {
        if (nombre == "") {
            setIsOpen(true);
            <IonToast
                isOpen={isOpen}
                message="Debe ingresar un nombre de persona valido"
                onDidDismiss={() => setIsOpen(false)}
                
                duration={5000}
            ></IonToast>;
        }
        else {
            // Buscamos el genero del nombre insertado
            fetch(`https://api.genderize.io/?name=${nombre}`)
                .then(async res => {
                    if (res.ok) {
                        const data = await res.json();
                        console.table(data);
                        setGenero(data.gender);
                        setProbabilidad(data.probability);
                        if (data.gender == "male") {

                            setColor("blue");
                            setResultado("Masculino")
                        }
                        else if (data.gender == "female") {
                            setColor("pink");
                            setResultado("Femenino");
                        }
                    }
                }).catch(e => {

                })
        }
    }


    return (

        <>
            <IonList>
                <IonItem>
                    <IonInput
                        label="Inserte el nombre de la persona"
                        type="text"
                        value={nombre}
                        onInput={(e: any) => setNombre(e.target.value)}
                    ></IonInput>
                </IonItem>
                <IonInput>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={Calcular}>Buscar</IonButton>
                        </IonButtons>
                        <IonTitle color={"primary"} >{resultado}</IonTitle>
                    </IonToolbar>
                </IonInput>
            </IonList>
        </>
    )
}

export default GenderContainer