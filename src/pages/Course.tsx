import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import CoursesList from "../components/CoursesList";
import Layout from "../components/Layout";

const Course: React.FC = () => {
  return (
    <IonPage>
      <Layout />
      <IonContent fullscreen>
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            <h2>Courses</h2>
          </IonTitle>
        </IonToolbar>
        <CoursesList />
      </IonContent>
    </IonPage>
  );
}

export default Course;
