import {
	IonList,
	IonItem,
	IonInput,
	IonToolbar,
	IonButtons,
	IonButton,
	IonTitle,
	IonImg,
} from "@ionic/react";

import { useState } from "react";

const AgeContainer: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [nombre, setNombre] = useState("");
	const [resultado, setResultado] = useState("");
	const [imagen, setImagen] = useState("");
	const Calcular = () => {
		if (nombre == "") {
			// mostrar excepcion
		} else {
			fetch(`https://api.agify.io/?name=${nombre}`).then(
				async (res) => {
					if (res.ok) {
						const data = await res.json();
						console.log(data);
						var valorEdad = data.age;
						if (valorEdad == null) {
							setResultado(
								"Por favor ingresar un nombre valido."
							);
							setImagen(
								"https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
							);
						} else {
							if (valorEdad < 18) {
								setResultado(
									`El nombre ${nombre} parace muy joven. Su edad es ${valorEdad}`
								);
								setImagen(
									"https://img.freepik.com/vector-premium/dibujos-animados-cara-hombre-joven_18591-44463.jpg"
								);
							} else if (
								valorEdad >
									18 &&
								valorEdad < 50
							) {
								setResultado(
									`El nombre ${nombre} parece de la mediana edad. Su edad es ${valorEdad}`
								);
								setImagen(
									"https://img.freepik.com/vector-premium/dibujos-animados-cara-hombre-joven_18591-44463.jpg"
								);
							} else {
								setResultado(
									`El nombre ${nombre} parece muy viejo. Su edad es ${valorEdad}`
								);
								setImagen(
									"https://img.freepik.com/vector-premium/dibujos-animados-cara-hombre-joven_18591-44463.jpg"
								);
							}
						}
					}
				}
			);
		}
	};
	return (
		<>
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
								{" "}
								Buscar
							</IonButton>
						</IonButtons>
						<IonTitle>{resultado}</IonTitle>
					</IonToolbar>
				</IonInput>
				<IonImg src={imagen}></IonImg>
			</IonList>
		</>
	);
};

export default AgeContainer;
