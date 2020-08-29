import React from 'react';
import './ExploreContainer.scss';
import RenderMarkdown from "./Render-Markdown/Render-Markdown";
import {IonCard, IonCardContent} from '@ionic/react';

interface ContainerProps {
    name: string;
}

const ExplorerContainer: React.FC<ContainerProps> = ({name}) => {
    console.log(name);
    return (
        <IonCard>
            <IonCardContent>
                <RenderMarkdown markdownFile={name}></RenderMarkdown>
            </IonCardContent>
        </IonCard>
    );
};

export default ExplorerContainer;
