import {
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButtons,
} from "@ionic/react";

import "./Page.css";
import AgeContainer from "../components/AgeContainer";

const Age: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Edad</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">
							Edad
						</IonTitle>
					</IonToolbar>
				</IonHeader>
				<AgeContainer />
			</IonContent>
		</IonPage>
	);
};

export default Age;
