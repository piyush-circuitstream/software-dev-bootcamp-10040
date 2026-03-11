// Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Move to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Move to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Automatically switch the image every 3 seconds (3000ms)
        const intervalId = setInterval(nextImage, 3000);

        // Cleanup the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div>
            <button onClick={prevImage}>
                Previous
            </button>
            <div>
                <img src={images[currentIndex]} alt={`carousel-image-${currentIndex}`} />
            </div>
            <button onClick={nextImage}>
                Next
            </button>
        </div>
    );
};

export default Carousel;
