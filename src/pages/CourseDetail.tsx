import {
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonBackButton,
    IonButtons,
    IonCol,
    IonGrid,
    IonRow,
} from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import "./CourseDetail.css";
import axios from 'axios';
import Header from "../components/Header";

type RouteParams = {
    id: string;
};

const CourseDetail: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const location = useLocation();
    const course = location.state as any;
    const history = useHistory();
    const courseInfo = {
        title: id.toUpperCase(),
        overview: course?.overview || "This is a detailed overview of the course.",
        curriculum: course?.curriculum || "This is the course curriculum.",
        duration: course?.duration || "6 months",
        fee: course?.fee || "₹30,000",
        eligibility: course?.eligibility || "10+2 or equivalent",
        id: id,
    };

    useEffect(() => {
    }, []);

    // Form states
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [sex, setSex] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const handleProceed = () => {
        if (!name || !email || !phone || !dob || !sex) {
            alert("Please fill in all fields and upload all required documents.");
            return;
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
                        {/* <h2>{courseInfo.title}</h2> */}
                        <h2>Application Form</h2>
                    </IonTitle>
                </IonToolbar>
                {/* Course Info */}
                {/* <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Overview</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>{courseInfo.overview}</p>
                        <p><strong>Curriculum:</strong> {courseInfo.curriculum}</p>
                        <p><strong>Duration:</strong> {courseInfo.duration}</p>
                        <p><strong>Fee:</strong> {courseInfo.fee}</p>
                        <p><strong>Eligibility:</strong> {courseInfo.eligibility}</p>
                    </IonCardContent>
                </IonCard> */}

                {/* Student Details */}
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
                    <IonInput value={sex} onIonChange={(e) => setSex(e.detail.value!)} />
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
    );
};

export default CourseDetail;
