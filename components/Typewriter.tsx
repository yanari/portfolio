import React, { useState, useEffect } from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const javascriptCode = `const introduction = {
    name: 'Marcelle Yanari',
    role: 'Frontend Developer',
    yearsOfExperience: 5
}
`;

const Typewriter = ({ delay = 100 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    // Typing logic goes here
    useEffect(() => {
        if (currentIndex < javascriptCode.length) {
            const timeout = setTimeout(() => {
                setCurrentText(
                    (prevText) => prevText + javascriptCode[currentIndex]
                );
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay]);

    return <code className='js'>{currentText}</code>;

    return <span>{currentText}</span>;
};

export default Typewriter;
