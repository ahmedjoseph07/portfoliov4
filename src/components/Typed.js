"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const TypingEffect = () => {
    const typeTarget = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["I am JOSEPH AHMED","A Full Stack Developer","A MERN Developer"],
            typeSpeed: 50,
            backSpeed: 90,
            loop: true,
            showCursor: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span ref={typeTarget}></span>;
};

export default TypingEffect;

