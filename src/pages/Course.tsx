import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import CoursesList from "../components/CoursesList";
import Header from "../components/Header";

const Course: React.FC = () => {
  return (
    <IonPage>
     <Header />
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
