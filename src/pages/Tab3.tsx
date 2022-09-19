import { useState, useEffect } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton,
	IonIcon,
} from "@ionic/react";
import { refreshOutline, addOutline } from "ionicons/icons";
import "./Tab3.css";

import dayjs from "dayjs";

const style = {
	author: {
		fontSize: "18px",
		color: "dark-grey",
		"text-align": "center",
	},
};

const Tab3: React.FC = () => {
	const [version, setVersion] = useState<number>(0);

	const refreshInfo = () => {
		const v = localStorage.getItem("AppVersion");
		setVersion(Number(v));
	};

	const incVersion = () => {
		localStorage.setItem("AppVersion", String(version + 1));
		refreshInfo();
	};

	useEffect(() => {
		refreshInfo();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Tab 3</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div
					style={{
						width: "200px",
						height: "200px",
						margin: "0px auto",

						backgroundImage:
							"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png)",
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundColor: "grey",
					}}
				/>
				<h1
					className="ion-text-center ion-text-uppercase ion-padding"
					style={{
						color: "darkBlue",
						fontSize: "36px",
					}}
				>
					Version {version}
				</h1>
				<div className="ion-text-center">
					<IonButton fill="clear" onClick={refreshInfo}>
						<IonIcon icon={refreshOutline} />
					</IonButton>
					<IonButton fill="clear" onClick={incVersion}>
						<IonIcon icon={addOutline} />
					</IonButton>
				</div>
				<h2 style={style.author}>author: Eko Dedy Purnomo</h2>
				<h2 className="release-date">
					release date: {dayjs().format("d MMM YYYY")}
				</h2>
			</IonContent>
		</IonPage>
	);
};

export default Tab3;