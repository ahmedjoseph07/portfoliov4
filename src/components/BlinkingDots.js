import { useState, useEffect } from 'react';

const BlinkingDots = () => {
    const [visibleDotIndex, setVisibleDotIndex] = useState(0);
    const dots = ['.', '.', '.']; // Array of dots

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleDotIndex((prevIndex) => (prevIndex + 1) % dots.length);
        }, 300); // Change the interval duration as needed (e.g., 500ms for blinking every half-second)

        return () => clearInterval(intervalId);
    }, [dots.length]);

    return (
        <div>
            {dots.map((dot, index) => (
                <span key={index} style={{ opacity: index === visibleDotIndex ? 1 : 0 }}>
                    {dot}
                </span>
            ))}
        </div>
    );
};

export default BlinkingDots;
