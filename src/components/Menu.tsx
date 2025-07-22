import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonButtons, IonToggle } from "@ionic/react"
import { homeOutline, bookOutline, personOutline } from "ionicons/icons"
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const Menu: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    const toggleDarkTheme = (shouldAdd: boolean) => {
        document.body.classList.toggle('dark', shouldAdd);
    };

    useEffect(() => {
        toggleDarkTheme(isDark);
    }, [isDark]);

    return (
        <IonMenu contentId="main-content" type="overlay">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem button routerLink="/home">
                        <IonIcon slot="start" icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/courses">
                        <IonIcon slot="start" icon={bookOutline} />
                        <IonLabel>Courses</IonLabel>
                    </IonItem>
                    <IonItem button routerLink="/profile">
                        <IonIcon slot="start" icon={personOutline} />
                        <IonLabel>Profile</IonLabel>
                    </IonItem>
                    <IonButtons className="theme-toggle">
                        <IonTitle>
                            Theme
                        </IonTitle>
                        <IonToggle
                            checked={isDark}
                            onIonChange={() => toggleTheme()}
                        />
                    </IonButtons>
                </IonList>
            </IonContent>
        </IonMenu>
    )
}

export default Menu;
