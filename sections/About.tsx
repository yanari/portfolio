// import { TypeAnimation } from 'react-type-animation';

// import 'highlight.js/styles/tokyo-night-dark.css';

import Typewriter from "@/components/Typewriter";

export default function About() {

    
    return (
        <div className="text-lg md:text-4xl h-full text-gray-50 flex flex-col items-center justify-center">
           <pre>
                <Typewriter />
           </pre>
        </div>
    )
}