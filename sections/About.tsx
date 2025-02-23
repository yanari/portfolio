import { useEffect } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

// import 'highlight.js/styles/tokyo-night-dark.css';

hljs.registerLanguage('javascript', javascript);

const javascriptCode = `const dev = {
    name: 'Marcelle',
    role: 'Frontend Developer',
}
`;

export default function About() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <div className="text-lg md:text-4xl h-full text-gray-50 flex flex-col items-center justify-center">
           <pre>
                <code className="js">
                    {javascriptCode}
                </code>
           </pre>
        </div>
    )
}