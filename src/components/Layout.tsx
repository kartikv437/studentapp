import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import './Layout.css';

const Layout: React.FC = () => {
    return (
        <IonHeader >
            <IonToolbar className="custom-header">
                <div slot="start" className="logo-container">
                    <img src="/student.jpg" alt="Student App Logo" />
                    <IonTitle>
                        <h1>Student App</h1>
                    </IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
    );
}

export default Layout;
