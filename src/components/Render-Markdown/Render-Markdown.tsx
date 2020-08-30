import React, {MutableRefObject, useEffect, useRef} from 'react';
import './_Render-Markdown.scss'
import MarkdownIt from 'markdown-it';
// import error = Simulate.error;

const markItDown: MarkdownIt = new MarkdownIt();

type Props = { markdownFile: string };

let fetched = false;
let previousRoute: string;

console.log('init', fetched)

export default function RenderMarkdown({markdownFile}: Props) {
    console.log('markdownFile', markdownFile);

    // const [route, changeRoute] = useState(markdownFile)
    // toggleFetched(false);
    // document.createNodeIterator()
    const mdContainer: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null)

    // const [route, updatedHttpCall] = useState('');
    // const mdContainer: MutableRefObject<HTMLElement> = useRef(document.getElementById('md-container'));
    useEffect(() => {

        // const elRef = mdContainer.current as HTMLDivElement;
        // mdContainer.current = document.getElementById('md-container') as any;
        console.log(mdContainer);

        if (fetched && (previousRoute !== markdownFile)) {
            fetched = false;
        }

        if (!fetched) {
            let responseBody = '';
            fetched = true;

            fetch(`/${markdownFile}.md`).then(response => response.text().then(body => {
                responseBody = body;
            })).catch(httpError => console.error(httpError.message))
                .finally(() => {
                    Promise.resolve(markItDown.render(responseBody)).then(returnVal => {
                        const containerElement = mdContainer.current as HTMLHeadingElement;
                        containerElement.innerHTML = returnVal;
                    })
                        .catch(renderError => console.error(renderError.message))
                })
        }
    })


    return (
        <div ref={mdContainer} id="md-container"></div>


    );
}
