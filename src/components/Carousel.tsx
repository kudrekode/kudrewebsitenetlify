import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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
  autoScrollInterval?: number; // in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  className = '', 
  header,
  autoScrollInterval = 5000 // default 5 seconds
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi || !isAutoScrolling) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [emblaApi, autoScrollInterval, isAutoScrolling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div className={`carousel-container-outer ${className}`}>
      {header && <h3 className="carousel-header">{header}</h3>}
      
      <div 
        className="carousel-viewport" 
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-track">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === selectedIndex ? 'active' : ''}`}
            >
              <div className="slide-content">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.image && (
                      <div className="image-container">
                        <img src={item.image} alt={item.title || `Slide ${index + 1}`} />
                      </div>
                    )}
                    {item.title && <h3>{item.title}</h3>}
                    {item.description && <p>{item.description}</p>}
                  </a>
                ) : (
                  <>
                    {item.image && (
                      <div className="image-container">
                        <img src={item.image} alt={item.title || `Slide ${index + 1}`} />
                      </div>
                    )}
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
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;