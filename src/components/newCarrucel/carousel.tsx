import React, { ReactNode } from "react";
import { useRef } from "react";
import "./carouse.css";
import arrowRight from "../../assets/imagens/arrow-r.svg";

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const slickRefs = useRef<HTMLDivElement[]>([]);

  let startX: number;
  let currentX: number;

  const handleTouchStart = (event: React.TouchEvent) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    currentX = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const track = trackRef.current;
    if (!track) return;

    const slickList = track.parentNode as HTMLDivElement;
    const slickWidth = slickRefs.current[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    const leftPosition = track.style.left
      ? parseFloat(track.style.left.slice(0, -2)) * -1
      : 0;

    const diffX = startX - currentX;

    if (diffX > 50) {
      // Swipe left
      if (leftPosition < trackWidth - listWidth) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
      }
    } else if (diffX < -50) {
      // Swipe right
      if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
      }
    }
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const track = trackRef.current;
    if (track === null) return;
    const slickList = track?.parentNode as HTMLDivElement;
    const slickWidth = slickRefs.current[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    const leftPosition = track.style.left
      ? parseFloat(track.style.left.slice(0, -2)) * -1
      : 0;

    if (event.currentTarget.dataset.button === "button-prev") {
      if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
      }
    } else {
      if (leftPosition < trackWidth - listWidth) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
      }
    }
  };

  return (
    <section className="computer-mark">
      <div className="Carousel">
        <div
          className="slick-list"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="slick-arrow slick-prev"
            data-button="button-prev"
            onClick={handleButtonClick}
          >
            <img style={{ rotate: "180deg" }} src={arrowRight} alt="arrow" />
          </button>
          <div className="slick-track" ref={trackRef} style={{ left: "0px" }}>
            {React.Children.map(children, (child, index) => (
              <div
                className="slick"
                ref={(el) => (slickRefs.current[index] = el!)}
              >
                {child}
              </div>
            ))}
          </div>
          <button
            className="slick-arrow slick-next"
            data-button="button-next"
            onClick={handleButtonClick}
          >
            <img src={arrowRight} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
