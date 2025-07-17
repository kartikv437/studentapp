import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import Layout from "../components/Layout";
import { useState } from "react";
import { useHistory } from "react-router";
import { useTabProgress } from "./TabProgressContext";

const Passport: React.FC = () => {
    const [passportNumber, setPassportNumber] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [passportStatus, setPassportStatus] = useState('');
    const history = useHistory();
    const { unlockStep } = useTabProgress();

    const checkStatus = () => {
        // Logic to check passport status
        setStatusMessage('');
        if (passportNumber.trim() === '') {
            setStatusMessage('Please enter a passport number.');
            return;
        } else if (passportNumber.length !== 9) {
            setStatusMessage('Invalid passport number. Please enter a 9-digit passport number.');
            return;
        }
        if (passportNumber) {
            setStatusMessage('Your passport verification is in progress. May take 24 hours to process.');
            setTimeout(() => {
                setStatusMessage('Your passport verification is Approved.');
                setPassportStatus('Approved');
            }, 3000);
            return
        }
    }

    const goToNextStep = () => {
        // Logic to navigate to the next step
        history.push('/verify-offer-letter');
        unlockStep(2);
    }

    return (
        <IonPage>
            <Layout />
            {/* Check Passport Status */}
            <IonContent className="ion-padding">
                <IonToolbar color="light">
                    <IonTitle>Check Passport Status</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
                <IonList>
                    <IonItem>
                        <IonLabel slot="start">Passport No.</IonLabel>
                        <IonInput type="text" placeholder="Enter Number" value={passportNumber} onIonInput={e => setPassportNumber(e.detail.value!)} />
                    </IonItem>
                </IonList>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" color="primary" disabled={!!passportStatus} onClick={checkStatus}>Check Status</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" color="secondary" disabled={!passportStatus} onClick={goToNextStep}>Next Step</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {/* Note */}
                {statusMessage && (
                    <IonItem className="ion-margin-top" lines="none">
                        <IonLabel color="medium">{statusMessage}</IonLabel>
                    </IonItem>
                )}

            </IonContent>
        </IonPage>
    )
}

export default Passport;