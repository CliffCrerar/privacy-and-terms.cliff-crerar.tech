import {IonButtons, IonContent,IonItem,IonIcon, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React from 'react';
import {useParams} from 'react-router';
import ExplorerContainer from '../components/ExploreContainer';
import './Page.css';
import {logoReact, logoIonic} from 'ionicons/icons'

type PageProps = {
    pageTitle: { title: string }
}

const Page: any = ({pageTitle}: PageProps) => {

    const {name} = useParams<{ name: string; }>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>CliffCrerar.tech | InfinityArc.net | Softwarecraft.co.za</IonTitle>
                    <IonItem slot="end" lines="none">
                        <IonIcon icon={logoReact}></IonIcon>
                        <IonIcon icon={logoIonic}></IonIcon>
                    </IonItem>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen color="light">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        {/*<IonTitle size="large">{pageTitle}</IonTitle>*/}
                    </IonToolbar>
                </IonHeader>
                <ExplorerContainer name={name}/>
            </IonContent>
        </IonPage>
    );
};

export default Page;
