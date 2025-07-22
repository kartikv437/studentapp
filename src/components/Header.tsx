import { IonApp, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import './Header.css';
import { useEffect } from "react";
import '../theme/variables.css';
import { useTheme } from "../context/ThemeContext";
import { menuOutline } from "ionicons/icons";
import Menu from "./Menu";

interface HeaderProps {
    title?: string;
    showMenu?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = 'Student App', showMenu = true }) => {

    return (
        // <IonHeader>
        //     <IonToolbar className="custom-header">
        //         <div slot="start" className="logo-container">
        //             <img src="/student.jpg" alt="Student App Logo" />
        //             <h1>{title}</h1>
        //         </div>
        //         {showMenu && (
        //             <IonButtons slot="end">
        //                 <IonMenuButton>
        //                     <IonIcon icon={menuOutline} />
        //                 </IonMenuButton>
        //             </IonButtons>
        //         )}

        //     </IonToolbar>
        // </IonHeader>
        <>
            <IonMenu content-id="main-content">
                <IonHeader>
                    <IonToolbar className="custom-header">
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonList>
                        <IonListHeader>
                            Navigate
                        </IonListHeader>
                        <IonMenuToggle auto-hide="false">
                            <IonItem button>
                                <IonIcon slot="start" name='home'></IonIcon>
                                <IonLabel>
                                    Home
                                </IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>

                <IonHeader id="main-content">
                    <IonToolbar className="custom-header">
                        <IonButtons slot="start" color="primary">
                            <IonMenuToggle>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={menuOutline}></IonIcon>
                                </IonButton>
                            </IonMenuToggle>
                        </IonButtons>
                        <IonTitle>{title}</IonTitle>
                    </IonToolbar>
                </IonHeader>
        </>
    );
}

export default Header;
