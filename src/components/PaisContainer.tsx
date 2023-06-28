import {
	IonButton,
	IonButtons,
	IonTitle,
	IonToolbar,
	IonToast,
	IonList,
	IonItem,
	IonInput,
	IonText,
	IonHeader,
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
} from "@ionic/react";
import { key } from "ionicons/icons";
import { useState } from "react";
import styled from "styled-components";

const MyButton = styled(IonTitle)`
	.color-genero {
		color: blue;
	}
`;

const PaisContainer: React.FC = () => {
	const [pais, setPais] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [resultado, setResultado] = useState([]);

	const Calcular = () => {
		if (pais == "") {
			setIsOpen(true);
		} else {
			// Buscamos el genero del nombre insertado
			fetch(
				`http://universities.hipolabs.com/search?country=${pais}`
			)
				.then(async (res) => {
					if (res.ok) {
						const data = await res.json();
						setResultado(
							Object.values(data)
						);
						console.log(
							Object.values(data)
						);
					}
				})
				.catch((e) => {});
		}
	};
	return (
		<>
			<IonList>
				<IonItem>
					<IonInput
						label="Pais"
						type="text"
						value={pais}
						onInput={(e: any) =>
							setPais(e.target.value)
						}
					></IonInput>
				</IonItem>
				<IonInput>
					<IonToolbar>
						<IonButtons slot="start">
							<IonButton
								onClick={
									Calcular
								}
							>
								Buscar
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonInput>
			</IonList>
			<IonHeader translate={"yes"}>
				<IonToolbar color="primary">
					<IonTitle>Pais {pais}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent class="ion-margin">
				<IonGrid class="ion-margin">
					<IonRow>
						<IonCol>Nombre</IonCol>
						<IonCol>Dominio</IonCol>
						<IonCol>Codigo</IonCol>
						<IonCol>Sitio Web</IonCol>
					</IonRow>
					{resultado.map((valor, index) => (
						<IonRow key={index}>
							<IonCol>
								{valor["name"]}
							</IonCol>
							<IonCol>
								{
									valor[
										"domains"
									][0]
								}
							</IonCol>
							<IonCol>
								{
									valor[
										"alpha_two_code"
									]
								}
							</IonCol>
							<IonCol>
								{
									valor[
										"web_pages"
									][0]
								}
							</IonCol>
						</IonRow>
					))}
				</IonGrid>
			</IonContent>
		</>
	);
};

export default PaisContainer;
