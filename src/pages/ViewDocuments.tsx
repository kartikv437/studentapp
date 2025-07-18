import { IonBackButton, IonButtons, IonContent, IonItem, IonLabel, IonList, IonPage, IonSpinner, IonText, IonTitle, IonToolbar } from "@ionic/react";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import "./ViewDocuments.css";
interface DocumentItem {
  fileUrl: string;
  displayName: string;
}

interface DocumentResponse {
  aadhar?: DocumentItem;
  tenth?: DocumentItem;
  twelfth?: DocumentItem;
  degree?: DocumentItem;
  photo?: DocumentItem;
}
const ViewDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<DocumentResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await fetch(`http://localhost:3001/files`);
        if (!res.ok) throw new Error('Failed to load documents');
        const data = await res.json();
        setDocuments(data[0]);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const renderDocItem = (label: string, doc?: DocumentItem) => (
    <IonItem className="doc-item">
      <IonLabel>
        <strong>{label}</strong><br />
        {doc ? (
          <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
            {doc.displayName}
          </a>
        ) : (
          <IonText color="medium">Not uploaded</IonText>
        )}
      </IonLabel>
    </IonItem>
  );

  return (
    <IonPage>
      <Layout />
      <IonContent className="ion-padding">
        <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            <h2> View Documents</h2>
          </IonTitle>
        </IonToolbar>
        {loading ? (
          <div className="centered">
            <IonSpinner name="dots" />
            <IonText>Loading documents...</IonText>
          </div>
        ) : error ? (
          <IonText color="danger">{error}</IonText>
        ) : (
          <IonList>
            {renderDocItem('Aadhar Card', documents?.aadhar)}
            {renderDocItem('10th Marksheet', documents?.tenth)}
            {renderDocItem('12th Marksheet', documents?.twelfth)}
            {renderDocItem('Degree Certificate', documents?.degree)}
            {renderDocItem('Passport-size Photo', documents?.photo)}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ViewDocuments;