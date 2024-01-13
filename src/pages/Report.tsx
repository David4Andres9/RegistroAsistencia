import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Report.css';
import { useState } from 'react';

const Tab3: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Attendance Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          Here we go
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
