"use client";
import { useState, useEffect, useRef } from 'react';

export default function TruncateText({ text, maxLines, classText, classToggle }) {
    const textRef = useRef(null);
    const [expanded, setExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    // Detecta se o texto excede as 3 linhas
    useEffect(() => {
        const element = textRef.current;
        if (!element) return;

        const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * (maxLines && maxLines || 3);

        setIsTruncated(element.scrollHeight > maxHeight);
    }, []);

    return (
        <>
            <p
                ref={textRef}
                className={`transition-all duration-300 ${!expanded ? 'line-clamp-3' : ''} ${classText}`}
            >
                {text}
            </p>

            {isTruncated && (
                <a
                    onClick={() => setExpanded(!expanded)}
                    className={`self-end text-blue-400 text-sm mt-1 pl-2 cursor-pointer ${classToggle}`}
                >
                    {expanded ? 'Ler menos' : 'Ler mais'}
                </a>
            )}
        </>
    );
}