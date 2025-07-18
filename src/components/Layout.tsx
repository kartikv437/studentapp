import { IonButtons, IonHeader, IonTitle, IonToggle, IonToolbar } from "@ionic/react";
import './Layout.css';
import { useEffect, useState } from "react";
import '../theme/variables.css';
import { useTheme } from "../context/ThemeContext";

const Layout: React.FC = () => {
const { isDark, toggleTheme } = useTheme();
    const toggleDarkTheme = (shouldAdd: boolean) => {
        document.body.classList.toggle('dark', shouldAdd);
    };

    useEffect(() => {
        toggleDarkTheme(isDark);
    }, [isDark]);

    return (
        <IonHeader >
            <IonToolbar className="custom-header">
                <div slot="start" className="logo-container">
                    <img src="/student.jpg" alt="Student App Logo" />
                    <IonTitle>
                        <h1>Student App</h1>
                    </IonTitle>
                </div>
                <IonButtons slot="end" className="theme-toggle">
                    <IonTitle>
                    Theme
                    </IonTitle>
                    <IonToggle
                        checked={isDark}
                        onIonChange={()=>toggleTheme()}
                    />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
}

export default Layout;
