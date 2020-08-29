import {IonContent,IonItemDivider, IonIcon,IonImg, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle,} from '@ionic/react';

import React, {Fragment} from 'react';
import {useLocation} from 'react-router-dom';
import {constructOutline,headsetOutline} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Privacy Policy',
        url: '/page/privacy-policy',
        iosIcon: headsetOutline,
        mdIcon: headsetOutline
    },
    {
        title: 'Terms of Use',
        url: '/page/terms-of-use',
        iosIcon: constructOutline,
        mdIcon: constructOutline
    }
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay" style={{maxWidth: '300px'}}>
            <IonContent>
                <IonList id="inbox-list">
                    <IonItem>
                        <IonTitle>Content</IonTitle>
                    </IonItem>

                    {appPages.map((appPage, index) => {
                        return (
                            <Fragment>
                                <IonMenuToggle key={index} autoHide={false}>
                                    <IonItem className={location.pathname === appPage.url ? 'selected' : ''}
                                             routerLink={appPage.url} routerDirection="none" lines="none"
                                             detail={false}>
                                        <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon}/>
                                        <IonLabel>{appPage.title}</IonLabel>
                                    </IonItem>

                                </IonMenuToggle>
                            </Fragment>
                        );
                    })}

                </IonList>

                {/*<IonList id="labels-list">*/}
                {/*  <IonListHeader>Labels</IonListHeader>*/}
                {/*  {labels.map((label, index) => (*/}
                {/*    <IonItem lines="none" key={index}>*/}
                {/*      <IonIcon slot="start" icon={bookmarkOutline} />*/}
                {/*      <IonLabel>{label}</IonLabel>*/}
                {/*    </IonItem>*/}
                {/*  ))}*/}
                {/*</IonList>*/}
                <IonItemDivider></IonItemDivider>
                <IonItem>
                <IonImg src="assets/ia.png"></IonImg>
                <IonImg style={{height: '50px'}} src="assets/cc.png"></IonImg>
                </IonItem>


            </IonContent>
        </IonMenu>
    );
};

export default Menu;
