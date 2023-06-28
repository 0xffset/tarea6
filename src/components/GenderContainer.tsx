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
	IonAlert,
	IonIcon,
	IonImg,
} from "@ionic/react";
import { useState } from "react";
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
	const [image, setImage] = useState("");
	const Calcular = () => {
		if (nombre == "" || !isNaN(parseInt(nombre))) {
			setIsOpen(true);
		} else {
			// Buscamos el genero del nombre insertado
			fetch(`https://api.genderize.io/?name=${nombre}`)
				.then(async (res) => {
					if (res.ok) {
						const data = await res.json();
						console.table(data);
						setGenero(data.gender);
						setProbabilidad(
							data.probability
						);
						if (data.gender == "male") {
							setColor("blue");
							setImage(
								"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Male_symbol_%28heavy_blue%29.svg/1280px-Male_symbol_%28heavy_blue%29.svg.png"
							);
							setResultado(
								"masculino"
							);
						} else if (
							data.gender == "female"
						) {
							setColor("pink");
							setImage(
								"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Female_symbol_%28heavy_pink%29.svg/1280px-Female_symbol_%28heavy_pink%29.svg.png"
							);
							setResultado(
								"femenino"
							);
						}
					}
				})
				.catch((e) => {});
		}
	};

	return (
		<>
			<IonAlert
				isOpen={isOpen}
				header="Oops! Algo salio mal..."
				subHeader="Error al buscar el nombre"
				message={
					"El nombre que ingreso fue incorrecto, por favor intentarlo de nuevo."
				}
				buttons={["Entendido"]}
				onDidDismiss={() => setIsOpen(false)}
			></IonAlert>

			<IonList>
				<IonItem>
					<IonInput
						label="Inserte el nombre de la persona"
						type="text"
						value={nombre}
						onInput={(e: any) =>
							setNombre(
								e.target.value
							)
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
						<IonTitle color={"primary"}>
							El nombre parece ser de
							alguien {resultado} con
							una probabilidad de{" "}
							{probabilidad * 100} %
						</IonTitle>
					</IonToolbar>
				</IonInput>
				<IonImg src={image}></IonImg>
			</IonList>
		</>
	);
};

export default GenderContainer;
