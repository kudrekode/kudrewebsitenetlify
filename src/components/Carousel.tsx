import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselItem {
  image: string;
  title?: string;
  description?: string;
  link?: string;
  articleLink?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  header?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, className = '', header }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className={`carousel-container ${className}`}>
      {header && <h3 className="carousel-header">{header}</h3>}
      <button 
        className="carousel-button prev" 
        onClick={prevSlide}
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="carousel-item-content">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.title || `Slide ${index + 1}`} />
                  {item.title && <h3>{item.title}</h3>}
                  {item.description && <p>{item.description}</p>}
                </a>
              ) : (
                <>
                  <img src={item.image} alt={item.title || `Slide ${index + 1}`} />
                  {item.title && <h3>{item.title}</h3>}
                  {item.description && <p>{item.description}</p>}
                </>
              )}
              {item.articleLink && (
                <div className="article-link">
                  <a href={item.articleLink} target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button 
        className="carousel-button next" 
        onClick={nextSlide}
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => !isTransitioning && setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;