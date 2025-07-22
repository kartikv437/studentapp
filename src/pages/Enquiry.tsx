import { IonPage, IonContent, IonToolbar, IonButtons, IonBackButton, IonTitle, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol, IonButton, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";

const Enqyury: React.FC = () => {
    // Form states
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [sex, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    const handleProceed = async () => {
        if (!name || !email || !phone || !dob || !sex) {
            alert("Please fill in all fields and upload all required documents.");
            return;
        }
        try{
            const response = await fetch("https://studentapp-node-backend.onrender.com/submit-application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName:name,
                    dateOfBirth:dob,
                    email:email,
                    phoneNumber:phone,
                    gender:sex,
                }),
            });
        }
        catch(error){
            console.log(error);
        }
    };

   const goToDocUpload = () => {
        history.push("/doc-upload");
    }

    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">

                <IonToolbar color="light">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>
                        <h2>Application Form</h2>
                    </IonTitle>
                </IonToolbar>


                <IonItem>
                    <IonLabel position="stacked">Full Name</IonLabel>
                    <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Date of Birth</IonLabel>
                    <IonInput type="date" value={dob} onIonChange={(e) => setDob(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Sex</IonLabel>
                    {/* select sex */}
                    <IonSelect value={sex} onIonChange={(e) => setSex(e.detail.value!)}>
                        <IonSelectOption value="Male">Male</IonSelectOption>
                        <IonSelectOption value="Female">Female</IonSelectOption>
                        <IonSelectOption value="Other">Other</IonSelectOption>
                    </IonSelect>
                    {/* <IonInput value={sex} onIonChange={(e) => setSex(e.detail.value!)} /> */}
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Phone Number</IonLabel>
                    <IonInput type="tel" value={phone} onIonChange={(e) => setPhone(e.detail.value!)} />
                </IonItem>

                <IonGrid>
                    <IonRow className="ion-justify-content-between">
                        <IonCol>
                            <IonButton expand="block" color="primary" onClick={handleProceed}>
                                Save
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" color="secondary" onClick={() => goToDocUpload()}>
                                Next Step
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    )
}
export default Enqyury;