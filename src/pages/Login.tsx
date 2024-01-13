import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';
import { lockClosed, logIn, person } from 'ionicons/icons';

const Registry: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen color="ligth" className="ion-padding">
        <IonCard className="loginCard">
          <br/>
            <center>
              <img alt="image" src="../../public/logo_puce.png" id="logoImage"/>
            </center>
          <br/>
          <IonCardContent>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol size="2">
                <IonIcon aria-hidden="true" icon={person} size="large"/>
                </IonCol>
                <IonCol size="10">
                  <IonInput placeholder="Enter your Username" maxlength={20} ></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol size="2">
                  <IonIcon aria-hidden="true" icon={lockClosed} size="large" />
                </IonCol>
                <IonCol size="10">
                  <IonInput placeholder="Enter your password" type="password" value=""></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton  color="medium" expand="block" shape="round">
              Login
              <IonIcon  color="dark" slot="start" icon={logIn}></IonIcon>
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
