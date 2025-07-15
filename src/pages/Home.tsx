import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage } from "@ionic/react";
import Layout from "../components/Layout";
import News from "../components/News";
import Events from "../components/Events";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Layout />
      <IonContent fullscreen className="ion-padding">

        {/* Banner Section */}
        <section>
          <img
            src="/studentBanner.jpg"
            alt="Student Banner"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </section>

        {/* News Section */}
        <section>
          <News />
        </section>

        {/* Programs Section */}
        <section>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Courses</h2>
          <IonCard href="/course">
            <IonCardHeader>
              <IonCardTitle>Our Programs</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Explore diploma, bachelor, and master programs.</p>
            </IonCardContent>
          </IonCard>
        </section>

        {/* Events Section */}
        <section>
          <Events />
        </section>

      </IonContent>
    </IonPage>
  );
}

export default Home;
