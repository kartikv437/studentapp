import { Redirect, Route } from 'react-router-dom';
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
import { useTabProgress } from './context/TabProgressContext';
import VerifyOfferLetter from './pages/VerifyOfferLetter';
import OfferLetter from './pages/OfferLetter';
import PaymentGateway from './pages/PaymentGateway';
import VisaProcess from './pages/VisaProcess';
setupIonicReact();

const App: React.FC = () => {
  const { stepsUnlocked, isReady } = useTabProgress();
  if (!isReady) return null;


  const disableIfLocked = (requiredStep: number) =>
    stepsUnlocked >= requiredStep ? undefined : 'disabled-tab';

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

            <Route exact path="/" >
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

          <IonTabBar slot="bottom" className='tab-bar'>
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
            <IonTabButton tab="Enquiry" href="/enquiry"            >
              <IonIcon aria-hidden="true" icon={helpCircleOutline} />
              <IonLabel>Enquiry</IonLabel>
            </IonTabButton>

            <IonTabButton tab="VerifyOfferLetter" href={stepsUnlocked >= 2 ? '/verify-offer-letter' : undefined}
              className={disableIfLocked(2)}>
              <IonIcon aria-hidden="true" icon={document} />
              <IonLabel>COL/UOL</IonLabel>
            </IonTabButton>

            <IonTabButton tab="PaymentGateway" href={stepsUnlocked >= 3 ? '/payment-gateway' : undefined}
              className={disableIfLocked(3)}>
              <IonIcon aria-hidden="true" icon={cardOutline} />
              <IonLabel>Payment</IonLabel>
            </IonTabButton>

            <IonTabButton tab="VisaProcess" href={stepsUnlocked >= 4 ? '/visa-process' : undefined}
              className={disableIfLocked(4)}>
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
