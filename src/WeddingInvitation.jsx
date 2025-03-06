import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundTheme from "./assets/BackgroundTheme.jpg";
import AttireSection from "./AttireSection.jsx";

const NavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 font-['Playfair_Display'] transition-all duration-300 relative group ${
      active ? "text-blue-500" : "text-gray-600 hover:text-blue-400"
    }`}
  >
    <span className="text-xl tracking-wide font-light italic transition-colors duration-300">
      {children}
    </span>
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 transform origin-left transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </button>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

NavLink.defaultProps = {
  active: false,
  onClick: () => {},
};

const WeddingInvitation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const homeRef = useRef(null);
  const carouselRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeSlide < 1) {
      setActiveSlide(1);
    } else if (isRightSwipe && activeSlide > 0) {
      setActiveSlide(0);
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Function to change slides with buttons
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 relative overflow-hidden">
      <main className="pt-0">
        <div className="w-full p-0 m-0">
          <div className="w-full">
            {/* Home Section with Carousel */}
            <div
              ref={homeRef}
              className="relative min-h-screen overflow-hidden"
            >
              {/* Carousel container */}
              <div
                ref={carouselRef}
                className="relative w-full h-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Slides container */}
                <div
                  className="flex transition-transform duration-500 ease-out h-full"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {/* Slide 1: Home Section */}
                  <div className="min-w-full min-h-screen flex items-center justify-center">
                    {/* Full background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${BackgroundTheme})`,
                        filter: "brightness(0.9)",
                      }}
                    />

                    {/* Content overlay - this will center your text on the background */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4 py-12 md:py-16">
                      {/* Top tagline */}
                      <div className="mb-8 md:mb-12">
                        <p className="font-['Playfair_Display'] uppercase tracking-wider text-sm sm:text-base md:text-lg">
                          YOU ARE INVITED TO A CELEBRATION OF LOVE
                        </p>
                      </div>

                      {/* Names section with elegant script font */}
                      <div className="mb-12 md:mb-16">
                        <h1 className="font-['Imperial_Script'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide text-white drop-shadow-lg">
                          Katrina
                          <span className="block -mt-4 sm:-mt-6">&</span>
                          Charles
                        </h1>
                      </div>

                      {/* Subtitle */}
                      <div className="mb-16 md:mb-24">
                        <p className="font-['Playfair_Display'] italic text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                          Immerse yourself in a celebration of love and
                          commitment. Join us as we begin our journey together
                          with an evening bathed in gentle elegance and timeless
                          grace.
                        </p>
                      </div>

                      {/* Date and location details at bottom */}
                      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center">
                        <div className="flex flex-col">
                          <span className="font-['Playfair_Display'] text-3xl sm:text-4xl mb-1">
                            MAY
                          </span>
                          <span className="font-['Playfair_Display'] text-5xl sm:text-6xl font-light">
                            18
                          </span>
                          <span className="font-['Playfair_Display'] text-2xl sm:text-3xl mt-1">
                            2025
                          </span>
                        </div>

                        <div className="hidden md:block h-12 w-px bg-white/60"></div>

                        <div className="flex flex-col">
                          <span className="font-['Playfair_Display'] text-2xl sm:text-3xl mb-1">
                            THE CHURCH AT
                          </span>
                          <span className="font-['Playfair_Display'] text-3xl sm:text-4xl font-light">
                            BACOLOR
                          </span>
                          <span className="font-['Playfair_Display'] text-lg sm:text-xl mt-2 italic">
                            San Guillermo Parish, Pampanga
                          </span>
                        </div>

                        <div className="hidden md:block h-12 w-px bg-white/60"></div>

                        <div className="flex flex-col">
                          <span className="font-['Playfair_Display'] text-2xl sm:text-3xl uppercase">
                            SATURDAY
                          </span>
                          <span className="font-['Playfair_Display'] text-4xl sm:text-5xl font-light">
                            3:00
                          </span>
                          <span className="font-['Playfair_Display'] text-2xl sm:text-3xl uppercase">
                            PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: Attire Section */}
                  <div className="min-w-full min-h-screen">
                    <AttireSection />
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                  <button
                    onClick={() => goToSlide(0)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeSlide === 0
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label="Go to slide 1"
                  />
                  <button
                    onClick={() => goToSlide(1)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeSlide === 1
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label="Go to slide 2"
                  />
                </div>

                {/* Navigation arrows (hidden on mobile) */}
                <button
                  onClick={() => activeSlide > 0 && goToSlide(activeSlide - 1)}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all ${
                    activeSlide === 0
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => activeSlide < 1 && goToSlide(activeSlide + 1)}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all ${
                    activeSlide === 1
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Swipe instruction (only shown on mobile) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:hidden z-20">
                  <p className="text-white/80 text-sm font-['Playfair_Display'] italic">
                    Swipe for more details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeddingInvitation;
