import { Redirect, Route, useHistory } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { airplaneOutline, cardOutline, document, helpCircleOutline, home, square, triangle, videocam } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home';
import Course from './pages/Course';
import Blog from './pages/Blog';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import CourseDetail from './pages/CourseDetail';
import DocUpload from './pages/DocUpload';
import ViewDocuments from './pages/ViewDocuments';
import Passport from './pages/Passport';
import Enquiry from './pages/Enquiry';
import './theme/global.css'
import { useTabProgress } from './pages/TabProgressContext';
import VerifyOfferLetter from './pages/VerifyOfferLetter';
import OfferLetter from './pages/OfferLetter';
import PaymentGateway from './pages/PaymentGateway';
import VisaProcess from './pages/VisaProcess';
import { useEffect, useState } from 'react';
setupIonicReact();

const App: React.FC = () => {
  const { stepsUnlocked } = useTabProgress();
  const { unlockStep } = useTabProgress();

  const disableIfLocked = (requiredStep: number) =>
    stepsUnlocked >= requiredStep ? undefined : 'disabled-tab';

  useEffect(() => {
    const stepsUnlocked = localStorage.getItem('stepsUnlocked');
    console.log('stepsUnlocked:', stepsUnlocked);

    if (stepsUnlocked) {
      unlockStep(parseInt(stepsUnlocked));
    }
  }, []);

  const goToTab = (step: number) => {
    if (step === 1) {
      localStorage.setItem('stepsUnlocked', '1');
      unlockStep(1);
    } else if (step === 2) {
      localStorage.setItem('stepsUnlocked', '2');
      unlockStep(2);
    } else if (step === 3) {
      localStorage.setItem('stepsUnlocked', '3');
      unlockStep(3);
    } else if (step === 4) {
      localStorage.setItem('stepsUnlocked', '4');
      unlockStep(4);
    } else {
      localStorage.setItem('stepsUnlocked', '1');
    }
  }


  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>

            <Route exact path="/enquiry">
              <Enquiry />
            </Route>
            <Route exact path="/course">
              <Course />
            </Route>
            <Route exact path="/course/:id" component={CourseDetail} />
            <Route path="/blog">
              <Blog />
            </Route>
            <Route exact path="/">
              <Redirect to="/enquiry" />
            </Route>

            <Route exact path="/doc-upload" component={DocUpload} />
            <Route exact path="/view-uploads" component={ViewDocuments} />
            <Route exact path="/passport" component={Passport} />
            <Route exact path="/verify-offer-letter" component={VerifyOfferLetter} />
            <Route exact path="/offer-letter" component={OfferLetter} />
            <Route exact path="/payment-gateway" component={PaymentGateway} />
            <Route exact path="/visa-process" component={VisaProcess} />
          </IonRouterOutlet>
          
          <IonTabBar slot="bottom">
            {/* <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="course" href="/course">
            <IonIcon aria-hidden="true" icon={document} />
            <IonLabel>Course</IonLabel>
          </IonTabButton>
          <IonTabButton tab="blog" href="/blog">
            <IonIcon aria-hidden="true" icon={videocam} />
            <IonLabel>Blog</IonLabel>
          </IonTabButton> */}
            <IonTabButton tab="Enquiry" href="/enquiry"
              onClick={() => goToTab(1)}>
              <IonIcon aria-hidden="true" icon={helpCircleOutline} />
              <IonLabel>Enquiry</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Verification" href={stepsUnlocked >= 2 ? '/offer-letter' : undefined}
              className={stepsUnlocked >= 2 ? undefined : 'disabled-tab'}
              onClick={() => goToTab(2)}>
              <IonIcon aria-hidden="true" icon={document} />
              <IonLabel>COL/UOL</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Payment" href={stepsUnlocked >= 3 ? '/payment-gateway' : undefined}
              className={stepsUnlocked >= 3 ? undefined : 'disabled-tab'}
              onClick={() => goToTab(3)}>
              <IonIcon aria-hidden="true" icon={cardOutline} />
              <IonLabel>Payment</IonLabel>
            </IonTabButton>

            <IonTabButton tab="Visa" href={stepsUnlocked >= 4 ? '/visa-process' : undefined}
              className={stepsUnlocked >= 4 ? undefined : 'disabled-tab'}
              onClick={() => goToTab(4)}>
              <IonIcon aria-hidden="true" icon={airplaneOutline} />
              <IonLabel>Visa</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}


export default App;
