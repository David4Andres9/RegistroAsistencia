import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Registry.css';
import { save } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="ligth" className="ion-padding">
      <IonCard className="loginCardRegistry">
        <IonCardHeader>
          <IonCardSubtitle>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        <IonList>
          <IonItem>
            <IonInput label="DNI" labelPlacement="floating" counter={true} maxlength={10} clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Name" labelPlacement="floating"  counter={true} maxlength={50} clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Last Name" labelPlacement="floating" counter={true} maxlength={50} clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Email" labelPlacement="floating" counter={true} maxlength={50} type="email" clearInput={true}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Phone" labelPlacement="floating" counter={true} maxlength={10} clearInput={true}></IonInput>
          </IonItem>

        </IonList>
        </IonCardContent>
      </IonCard>
      <IonButton color="medium" expand="block" shape="round" >
        Registry
        <IonIcon slot="start" icon={save}></IonIcon>
      </IonButton>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
