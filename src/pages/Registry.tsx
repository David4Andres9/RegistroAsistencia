import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Registry.css';
import { lockClosed, logIn, person } from 'ionicons/icons';

const Registry: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <br/>
            <center>
              <img alt="image" src="../../public/logo_puce.png" />
            </center>
          <br/>
          <IonCardContent>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                <IonIcon aria-hidden="true" icon={person} size="large"/>
                </IonCol>
                <IonCol size="auto">
                  <IonInput placeholder="Enter your Username" maxlength={20}></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonIcon aria-hidden="true" icon={lockClosed} size="large"/>
                </IonCol>
                <IonCol size="auto">
                  <IonInput placeholder="Enter your password" type="password" value=""></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton color="secundary" expand="block" shape="round">
              Login
              <IonIcon slot="start" icon={logIn}></IonIcon>
            </IonButton>
            <br/><br/><br/>
            <center>
              <h6>
                For your safety, do not share your password with third parties.
              </h6>
            </center>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Registry;
