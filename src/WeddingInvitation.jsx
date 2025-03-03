import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import WeddingPhoto from "./assets/Wedding2.jpg";
import {
  Heart,
  Stars,
  Sparkles,
  Calendar,
  Clock,
  ChurchIcon,
  GlassWater,
  Camera,
  PartyPopper,
} from "lucide-react";
import LocationSection from "./Location.jsx";
import RSVP from "./RSVP.jsx";
import ResponsiveHeader from "./ResponsiveHeader.jsx";

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

const TimelineEvent = ({ time, title, icon: Icon, description }) => (
  <div className="relative flex items-start gap-8 group">
    <div className="absolute left-6 top-10 bottom-0 w-px bg-gradient-to-b from-blue-200 via-pink-200 to-transparent group-last:hidden" />

    <div className="relative">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-pink-100 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
    </div>

    <div className="flex-1 space-y-3 pt-2">
      <div className="flex items-center gap-4">
        <p className="font-['Playfair_Display'] italic text-lg text-gray-500">
          {time}
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
      </div>
      <h3 className="font-['Great_Vibes'] text-3xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="font-['Playfair_Display'] text-gray-600 italic">
        {description}
      </p>
    </div>
  </div>
);

TimelineEvent.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  description: PropTypes.string.isRequired,
};

const ScheduleSection = () => (
  <div className="w-full relative">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-xl" />
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-xl" />
    </div>

    {/* Content container with reduced padding on mobile */}
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 relative">
      {/* Romantic section header with smaller margins */}
      <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="relative">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
            <div className="absolute inset-0 blur-sm bg-blue-100 rounded-full opacity-30 animate-pulse" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>
        <h2 className="font-['Great_Vibes'] text-4xl sm:text-5xl text-gray-800 drop-shadow-sm">
          Schedule
        </h2>
        <p className="font-['Playfair_Display'] italic text-gray-600 text-sm sm:text-base">
          Join us in celebrating our special day
        </p>
      </div>

      {/* Compressed timeline with less vertical spacing */}
      <div className="relative bg-white/60 backdrop-blur-sm rounded-xl shadow-md border border-pink-100/50 p-3 sm:p-4 md:p-6">
        {/* Decorative corner flourishes - smaller on mobile */}
        <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-8 sm:w-10 h-8 sm:h-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-pink-200/60 fill-current"
          >
            <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
          </svg>
        </div>
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-8 sm:w-10 h-8 sm:h-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-blue-200/60 fill-current rotate-90"
          >
            <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
          </svg>
        </div>

        {/* Timeline events with reduced spacing */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 py-2 sm:py-4">
          {/* Responsive timeline line */}
          <div className="absolute left-5 sm:left-6 md:left-7 top-16 bottom-10 w-px bg-gradient-to-b from-blue-200 via-pink-200 to-transparent" />

          {/* Compressed Timeline Events */}
          <CompressedTimelineEvent
            time="1:00 PM"
            title="Guest Arrival"
            icon={Clock}
            description="Welcome drinks and seating at the San Guillermo Parish Church"
          />
          <CompressedTimelineEvent
            time="2:00 PM"
            title="Wedding Ceremony"
            icon={ChurchIcon}
            description="Holy Matrimony at the historic San Guillermo Parish Church"
          />
          <CompressedTimelineEvent
            time="3:30 PM"
            title="Cocktail Hour"
            icon={GlassWater}
            description="Cocktails, hors d'oeuvres, and live music at the garden reception"
          />
          <CompressedTimelineEvent
            time="4:00 PM"
            title="Photo Session"
            icon={Camera}
            description="Family and group photos in the church grounds"
          />
          <CompressedTimelineEvent
            time="5:00 PM"
            title="Reception Celebration"
            icon={PartyPopper}
            description="Dinner, dancing, and festivities at the reception venue"
          />
        </div>
      </div>

      {/* Romantic footer quote - hidden on smaller screens */}
      <div className="mt-6 text-center hidden sm:block">
        <p className="font-['Playfair_Display'] italic text-gray-500 text-sm">
          &quot;Forever is composed of nows&quot; — Emily Dickinson
        </p>
      </div>
    </div>
  </div>
);

// Compressed and responsive timeline event component
const CompressedTimelineEvent = ({ time, title, icon: Icon, description }) => (
  <div className="relative flex items-start gap-3 sm:gap-4 md:gap-6 group">
    <div className="shrink-0 relative z-10">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 border border-pink-100/50">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-pink-500 transition-colors duration-300" />
      </div>
    </div>

    <div className="flex-1 space-y-1 sm:space-y-2 pt-1 sm:pt-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <p className="font-['Playfair_Display'] italic text-base sm:text-lg text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
          {time}
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-pink-100 to-transparent" />
      </div>
      <h3 className="font-['Great_Vibes'] text-2xl sm:text-3xl text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="font-['Playfair_Display'] text-sm sm:text-base text-gray-600 italic">
        {description}
      </p>
    </div>
  </div>
);

CompressedTimelineEvent.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  description: PropTypes.string.isRequired,
};

const WeddingInvitation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const scheduleRef = useRef(null);
  const locationRef = useRef(null);
  const rsvpRef = useRef(null);
  const weddingpartyRef = useRef(null);

  // Updated scrollToSection function with offset
  const scrollToSection = (ref) => {
    if (ref.current) {
      const headerHeight = 80; // Height of your fixed header
      const elementPosition = ref.current.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 70;

      // Make sure all refs exist before checking
      if (
        homeRef.current &&
        scheduleRef.current &&
        locationRef.current &&
        rsvpRef.current
      ) {
        const homeOffset = homeRef.current.offsetTop - headerHeight;
        const scheduleOffset = scheduleRef.current.offsetTop - headerHeight;
        const locationOffset = locationRef.current.offsetTop - headerHeight;
        const rsvpOffset = rsvpRef.current.offsetTop - headerHeight;

        // Add some buffer for better section detection
        if (scrollPosition >= rsvpOffset - 20) {
          setActiveSection("rsvp");
        } else if (scrollPosition >= locationOffset - 20) {
          setActiveSection("location");
        } else if (scrollPosition >= scheduleOffset - 20) {
          setActiveSection("schedule");
        } else if (scrollPosition >= homeOffset) {
          setActiveSection("home");
        }
      }
    };

    // Call it once immediately to set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70" />
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-50/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70" />
      </div>

      {/* Responsive Navigation Header */}
      <ResponsiveHeader
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        scheduleRef={scheduleRef}
        locationRef={locationRef}
        rsvpRef={rsvpRef}
        weddingpartyRef={weddingpartyRef}
      />

      <main className="pt-20">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Romantic Home Section */}
            <div
              ref={homeRef}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden relative border border-gradient-to-r from-blue-100 to-pink-100 mb-12 min-h-[calc(100vh-120px)]"
            >
              {/* Romantic background overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTMwIDMwbTE1IDAgYTIgMiAwIDAgMCAtMS41IDMuNSAxNSAxNSAwIDAgMS01LjUgMjUuNUEyIDIgMCAwIDAgMzYgNjJjMCAxLjEgMC45IDIgMiAyYTE5IDE5IDAgMCAwIDctMzYuNSAyIDIgMCAwIDAtMi0yem0wIDBNMzAgMzBtLTE1IDBhMiAyIDAgMCAxIDEuNSAzLjUgMTUgMTUgMCAwIDAgNS41IDI1LjVBMiAyIDAgMCAxIDI0IDYyYzAgMS4xLTAuOSAyLTIgMmExOSAxOSAwIDAgMS03LTM2LjUgMiAyIDAgMCAxIDItMnptMCAwTTMwIDMwbTE1IDBhMiAyIDAgMCAxIDEuNS0zLjUgMTUgMTUgMCAwIDAgNS41LTI1LjVBMiAyIDAgMCAxIDU0IDJjMC0xLjEtMC45LTItMi0yYTE5IDE5IDAgMCAwLTcgMzYuNSAyIDIgMCAwIDEgMiAyem0wIDBNMzAgMzBtLTE1IDBhMiAyIDAgMCAwLTEuNS0zLjUgMTUgMTUgMCAwIDEtNS41LTI1LjVBMiAyIDAgMCAwIDYgMmMwLTEuMS0wLjktMi0yLTJhMTkgMTkgMCAwIDEgNyAzNi41IDIgMiAwIDAgMCAyIDJ6Ii8+PC9zdmc+')] opacity-10 pointer-events-none" />

              {/* Falling rose petals animation */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-3 h-3 rounded-full bg-pink-100 opacity-60 animate-float`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `-${Math.random() * 10}%`,
                      animationDuration: `${Math.random() * 10 + 15}s`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>

              {/* Enhanced decorative borders with gold accents */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-yellow-200/50 via-blue-400 to-pink-300/70 opacity-60" />
              <div className="absolute right-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-pink-300/70 via-blue-400 to-yellow-200/50 opacity-60" />

              {/* Decorative corner flourishes */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-pink-200/60 fill-current"
                >
                  <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
                </svg>
              </div>
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-blue-200/60 fill-current rotate-90"
                >
                  <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
                </svg>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-blue-200/60 fill-current -rotate-90"
                >
                  <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
                </svg>
              </div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-pink-200/60 fill-current rotate-180"
                >
                  <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
                </svg>
              </div>

              {/* Flexbox layout with responsive stacking and alignment */}
              <div className="flex flex-col lg:flex-row items-center lg:items-stretch h-full">
                {/* Left Section (Image) - Enhanced with romantic frame */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 relative">
                  <div className="relative w-full max-w-md lg:max-w-full h-full max-h-[50vh] lg:max-h-full group">
                    {/* Romantic gold-toned decorative frames */}
                    <div className="absolute inset-0 border-2 border-yellow-100/60 rounded-lg transform -rotate-1 transition-transform duration-500 group-hover:rotate-1" />
                    <div className="absolute inset-0 border border-pink-200/70 rounded-lg transform rotate-1 transition-transform duration-500 group-hover:-rotate-1" />

                    {/* Enhanced image container with gold-tone glow */}
                    <div className="relative h-full w-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                      {/* Romantic image hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Image */}
                      <img
                        src={WeddingPhoto}
                        alt="Katrina and Charles"
                        className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                        loading="eager"
                        width="600"
                        height="800"
                      />

                      {/* Enhanced overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/20 to-blue-100/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 border-2 sm:border-4 border-yellow-50/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-2 sm:m-4" />
                    </div>
                  </div>
                </div>

                {/* Right Section (Content) - Enhanced with romantic elements */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 relative group">
                  {/* Enhanced background pattern */}
                  <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjQsMTAgQzI0LDEwIDI5LDE2IDM0LDEwIEMzOSw0IDM0LDAgMjQsMTAgWiIgZmlsbD0iI2YwYWJmYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQsMjQpcm90YXRlKDApIi8+PHBhdGggZD0iTTI0LDEwIEMyNCwxMCAyOSwxNiAzNCwxMCBDMzksNCAzNCwwIDI0LDEwIFoiIGZpbGw9IiNmMGFiZmMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LDI0KXJvdGF0ZSg5MCkiLz48cGF0aCBkPSJNMjQsMTAgQzI0LDEwIDI5LDE2IDM0LDEwIEMzOSw0IDM0LDAgMjQsMTAgWiIgZmlsbD0iI2YwYWJmYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQsMjQpcm90YXRlKDE4MCkiLz48cGF0aCBkPSJNMjQsMTAgQzI0LDEwIDI5LDE2IDM0LDEwIEMzOSw0IDM0LDAgMjQsMTAgWiIgZmlsbD0iI2YwYWJmYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQsMjQpcm90YXRlKDI3MCkiLz48L3N2Zz4=')] bg-repeat" />

                  <div className="w-full max-w-md lg:max-w-lg space-y-5 sm:space-y-6 md:space-y-8 relative">
                    {/* Enhanced romantic divider */}
                    <div className="flex items-center gap-2 sm:gap-4 transform hover:scale-105 transition-transform duration-300">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
                      <div className="relative">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 animate-pulse" />
                        <div className="absolute inset-0 blur-sm bg-yellow-200 rounded-full opacity-30 animate-pulse" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                    </div>

                    {/* Romantic quote */}
                    <div className="text-center">
                      <p className="font-['Playfair_Display'] italic text-gray-500 text-sm sm:text-base">
                        &quot;Two souls with a single thought, two hearts that
                        beat as one&quot;
                      </p>
                    </div>

                    {/* Enhanced names section with glowing effect */}
                    <div className="text-center space-y-2 sm:space-y-4 relative">
                      <div className="absolute inset-0 -m-4 bg-gradient-to-r from-blue-100/0 via-pink-100/20 to-blue-100/0 rounded-full blur-xl opacity-70"></div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Great_Vibes'] tracking-wide text-blue-800 hover:text-blue-600 transition-colors duration-500 drop-shadow-sm">
                        Katrina
                      </h1>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 my-1 sm:my-2 md:my-4">
                        <div className="w-6 sm:w-10 md:w-16 h-px bg-gradient-to-r from-blue-200 to-pink-200" />
                        <div className="relative">
                          <Heart
                            className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 text-pink-400 animate-pulse"
                            fill="currentColor"
                          />
                          <div className="absolute inset-0 blur-sm bg-pink-200 rounded-full opacity-50 animate-pulse" />
                        </div>
                        <div className="w-6 sm:w-10 md:w-16 h-px bg-gradient-to-r from-pink-200 to-blue-200" />
                      </div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Great_Vibes'] tracking-wide text-pink-800 hover:text-pink-600 transition-colors duration-500 drop-shadow-sm">
                        Charles
                      </h1>
                    </div>

                    {/* Date and venue section - enhanced with countdown */}
                    <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
                      <div className="bg-gradient-to-r from-pink-50/0 via-pink-50/50 to-pink-50/0 py-3 px-2 rounded-lg">
                        <p className="text-lg sm:text-xl md:text-2xl font-['Playfair_Display'] italic text-gray-600 font-light tracking-widest">
                          May 18, 2025
                        </p>
                        <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-500 mt-1">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-300 shadow-sm" />
                          <span className="font-['Playfair_Display'] italic">
                            3 PM
                          </span>
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-300 shadow-sm" />
                        </div>
                      </div>
                      <div className="space-y-1 sm:space-y-2 md:space-y-3">
                        <p className="font-['Great_Vibes'] text-2xl sm:text-3xl md:text-4xl text-gray-800 relative inline-block">
                          Bacolor, Pampanga
                          <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent"></span>
                        </p>
                      </div>
                    </div>

                    {/* Countdown timer */}
                    <div className="bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 py-3 px-4 rounded-lg">
                      <p className="text-center font-['Playfair_Display'] italic text-gray-600 text-sm mb-2">
                        Join us in celebrating our love in
                      </p>
                      <div className="flex justify-center gap-2 sm:gap-4">
                        <div className="text-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-pink-50 rounded-lg shadow-sm border border-pink-100">
                            <span className="font-bold text-gray-700">442</span>
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            Days
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-50 rounded-lg shadow-sm border border-blue-100">
                            <span className="font-bold text-gray-700">10</span>
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            Hours
                          </span>
                        </div>
                        <div className="text-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-pink-50 rounded-lg shadow-sm border border-pink-100">
                            <span className="font-bold text-gray-700">38</span>
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            Minutes
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced bottom divider */}
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                      <div className="relative">
                        <Stars className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" />
                        <div className="absolute inset-0 blur-sm bg-yellow-200 rounded-full opacity-30 animate-pulse" />
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
                    </div>

                    {/* Dual RSVP buttons with enhanced styling */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                      <button
                        onClick={() => scrollToSection(rsvpRef)}
                        className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-['Great_Vibes'] text-xl hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
                      >
                        RSVP Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div ref={scheduleRef} className="mt-8">
              <ScheduleSection />
            </div>

            {/* Location Section */}
            <div ref={locationRef} className="mt-8">
              <LocationSection />
            </div>
            {/* RSVP Section */}
            <div ref={rsvpRef} className="mt-8">
              <RSVP />
            </div>

            {/* Updated Footer without white background */}
            <footer className="w-full mt-5 relative">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 pointer-events-none" />

              <div className="max-w-7xl mx-auto px-6 py-12 relative">
                {/* Top Section with Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"></div>

                {/* Bottom Section with Divider - Updated border color */}
                <div className="pt-8 border-t border-gray-300/30">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <div className="flex items-center gap-2">
                      <Heart
                        className="w-4 h-4 text-pink-400"
                        fill="currentColor"
                      />
                      <span className="font-['Great_Vibes'] text-2xl text-gray-800">
                        Katrina & Charles
                      </span>
                    </div>
                    <p className="font-['Playfair_Display'] italic text-gray-500 text-sm">
                      #KatrinaAndCharles2025
                    </p>
                    <p className="text-gray-500 text-sm">
                      © 2025 All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeddingInvitation;
