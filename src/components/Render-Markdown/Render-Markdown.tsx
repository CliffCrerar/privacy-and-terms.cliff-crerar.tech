import React, {useEffect, useState} from 'react';
// import {MarkItDown} from '../mark-it-down'
import {render} from "react-dom";
import {IonIcon, IonItem, IonLabel, IonText} from '@ionic/react';
import {lockClosedOutline} from 'ionicons/icons'
import MarkdownIt from 'markdown-it';
// import error = Simulate.error;

const markItDown: MarkdownIt = new MarkdownIt();

type Props = { markdownFile: string };

let fetched = false;
let previousRoute: string;

console.log('init', fetched)

export default function RenderMarkdown({markdownFile}: Props) {
    console.log('markdownFile', markdownFile);

    const [route, changeRoute] = useState(markdownFile)
    // toggleFetched(false);
    let mdContainer: HTMLDivElement;
    let headingEl: HTMLHeadingElement;
    let headingSec: NodeListOf<HTMLHeadingElement>;
    let headingThird: NodeListOf<HTMLHeadingElement>;
    let headingFourth: NodeListOf<HTMLHeadingElement>

    // const [route, updatedHttpCall] = useState('');


    function checkRouteSwitch() {

    }

    useEffect(() => {

        if (fetched && (previousRoute !== markdownFile)) {
            fetched = false;
        }

        if (!fetched) {
            let responseBody = '';
            fetched = true;
            mdContainer = document.getElementById('md-container') as HTMLDivElement;
            fetch(`/${markdownFile}.md`).then(response => response.text().then(body => {
                responseBody = body;
            })).catch(httpError => console.error(httpError.message))
                .finally(() => {
                    Promise.resolve(markItDown.render(responseBody)).then(returnVal => {
                        mdContainer.innerHTML = returnVal;
                        headingEl = mdContainer.querySelector('h1') as HTMLHeadingElement;
                        headingSec = mdContainer.querySelectorAll('h2') as NodeListOf<HTMLHeadingElement>;
                        headingThird = mdContainer.querySelectorAll('h3') as NodeListOf<HTMLHeadingElement>;
                        headingFourth = mdContainer.querySelectorAll('h4') as NodeListOf<HTMLHeadingElement>;
                        headingEl.id = 'heading';
                    })
                        .catch(renderError => console.error(renderError.message))
                        .finally(() => {
                            const funcPartial = markdownFile.replace(/-/g, '');
                            console.log(funcPartial);
                            switch (funcPartial) {
                                case 'termsofuse':
                                    return termsofuse();
                                case 'privacypolicy':
                                    return privacypolicy();
                            }
                        });
                })
        }
    })

    function privacypolicy() {
        handleHeadingsOne();
        handleHeadingsTwo();
        handleHeadingsThree();
        console.log('proceess privacy policy')
    }

    function termsofuse(): void {
        handleHeadingsOne();
        handleHeadingsTwo();
        render(
            <IonItem>
                {/*<IonTitle>*/}
                <IonLabel style={{fontSize: '1.5em'}}>
                    {headingThird[0].innerText}
                </IonLabel>
                {/*</IonTitle>*/}
                {headingFourth[0].innerText}
            </IonItem>, headingThird[0])

        headingFourth[0].innerText = '';
    }


    function handleHeadingsOne() {
        render(
            <IonItem style={{position: 'relative', fontSize: '1.5em',}} className="ion-margin-vertical">
                <IonIcon slot="start" size="large" icon={lockClosedOutline}></IonIcon>
                <IonText>{headingEl.innerText}</IonText>
            </IonItem>, headingEl
        )
    }

    function handleHeadingsTwo() {
        headingSec.forEach((el: any) => {
            console.log(el);
            render(<IonItem style={{fontSize: '1.2em'}}>{el.innerText}</IonItem>, el);
        })
    }

    function handleHeadingsThree() {
        console.log('h3', headingThird);

        for (let i = 1; i < headingThird.length; i++) {

        }
    }

    return (<div id="md-container">
        {/*{renderedMd}*/}
    </div>);
}
