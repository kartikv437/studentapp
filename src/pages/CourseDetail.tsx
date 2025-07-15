import {
    IonPage,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBackButton,
    IonButtons,
    IonIcon,
    IonList,
    IonText,
    IonImg,
} from "@ionic/react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./CourseDetail.css";
import axios from 'axios';

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
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [highSchool, setHighSchool] = useState<File | null>(null);
    const [intermediate, setIntermediate] = useState<File | null>(null);
    const [photo, setPhoto] = useState<File | null>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, setter: (file: File | null) => void) => {
        const selectedFile = e.target.files?.[0];
        setter(selectedFile ?? null);
        console.log("Selected file:", selectedFile);

        if (!selectedFile) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const res = await axios.post('http://localhost:3001/upload', formData).then((response) => {
                console.log('File uploaded successfully:', response.data)
            }).catch((error) => {
                console.error('Upload failed:', error);
                alert('Upload failed');
            });
        } catch (err) {
            console.error('Upload failed:', err);
            alert('Upload failed');
        }
    };

    const handleProceed = () => {
        if (!name || !email || !phone || !highSchool || !intermediate || !photo) {
            alert("Please fill in all fields and upload all required documents.");
            return;
        }

        // TODO: Implement form submission or navigate to payment page
        console.log("Proceeding to payment with:", { name, email, phone });
    };

    const goToDocUpload = () => {
        history.push("/doc-upload");
    }


    return (
        <IonPage>
            <Layout />
            <IonContent className="ion-padding">

                <IonToolbar color="light">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>
                        <h2>{courseInfo.title}</h2>
                    </IonTitle>
                </IonToolbar>
                {/* Course Info */}
                <IonCard>
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
                </IonCard>

                {/* Student Details */}
                <IonItem>
                    <IonLabel position="stacked">Full Name</IonLabel>
                    <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Phone Number</IonLabel>
                    <IonInput type="tel" value={phone} onIonChange={(e) => setPhone(e.detail.value!)} />
                </IonItem>

                <IonButton expand="block" onClick={() => goToDocUpload()}>
                    Next Step
                </IonButton>

            </IonContent>
        </IonPage>
    );
};

export default CourseDetail;
