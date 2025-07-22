import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import Header from "../components/Header";

const Blog: React.FC = () => {
    return (
        <IonPage>
            <Header />
                <IonContent fullscreen>
                    <IonToolbar>
                        <IonTitle size="large">
                            <h1>Blogs</h1>
                        </IonTitle>
                    </IonToolbar>
                    <h1>Welcome to the Blog Page</h1>
                    <p>This is where you can read our latest articles and updates.</p>
                    <p>Stay tuned for more content!</p>
                </IonContent>
        </IonPage>
    );
}

export default Blog;
