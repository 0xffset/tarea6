import {
	IonApp,
	IonRouterOutlet,
	IonSplitPane,
	setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Genero from "./pages/Genero";
import Pais from "./pages/Pais";
import Age from "./pages/AgePage";
import Clima from "./pages/Clima";
import Wordpress from "./pages/WordpressPage";
import About from "./pages/AboutPage";
setupIonicReact();

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/" exact={true}>
							<Redirect to="/page/genero" />
						</Route>
						<Route
							path="/page/genero"
							exact={true}
						>
							<Genero />
						</Route>
						<Route
							path="/page/pais"
							exact={true}
						>
							<Pais />
						</Route>
						<Route
							path="/page/edad"
							exact={true}
						>
							<Age />
						</Route>
						<Route
							path="/page/clima"
							exact={true}
						>
							<Clima />
						</Route>
						<Route
							path="/page/wordpress"
							exact={true}
						>
							<Wordpress />
						</Route>
						<Route
							path="/page/acerca"
							exact={true}
						>
							<About />
						</Route>
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
