import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Heart, Menu, X, Home, Calendar, MapPin, Mail } from "lucide-react";

const ResponsiveHeader = ({
  activeSection,
  scrollToSection,
  homeRef,
  scheduleRef,
  locationRef,
  rsvpRef,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when user clicks a link
  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMobileMenuOpen(false);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-50/90 via-white/90 to-orange-100/90 backdrop-blur-md z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-4">
            {/* Brand - Always visible */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick(homeRef)}
            >
              <div className="relative">
                <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
                <div className="absolute inset-0 animate-ping opacity-30">
                  <Heart
                    className="w-5 h-5 text-pink-400"
                    fill="currentColor"
                  />
                </div>
              </div>
              <span className="font-['Great_Vibes'] text-2xl text-gray-800">
                K & C
              </span>
            </div>

            {/* Desktop Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-4">
              <NavLink
                active={activeSection === "home"}
                onClick={() => scrollToSection(homeRef)}
                icon={Home}
                label="Home"
              />
              <NavLink
                active={activeSection === "schedule"}
                onClick={() => scrollToSection(scheduleRef)}
                icon={Calendar}
                label="Schedule"
              />
              <NavLink
                active={activeSection === "location"}
                onClick={() => scrollToSection(locationRef)}
                icon={MapPin}
                label="Location"
              />
              <NavLink
                active={activeSection === "rsvp"}
                onClick={() => scrollToSection(rsvpRef)}
                icon={Mail}
                label="RSVP"
              />
            </div>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              className="md:hidden relative p-2 text-gray-700 hover:text-pink-500 focus:outline-none rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>

        {/* Subtle indicator line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-blue-100/20 via-pink-100/40 to-blue-100/20"></div>
      </header>

      {/* Full-screen Mobile Menu - Completely separate from header */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-auto">
          {/* Menu Header with close button */}
          <div className="sticky top-0 bg-gradient-to-r from-pink-100/80 via-white/90 to-blue-100/80 px-6 py-4 flex justify-between items-center border-b border-pink-100 shadow-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
              <span className="font-['Great_Vibes'] text-2xl text-gray-800">
                K & C
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-pink-500 focus:outline-none rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col p-6 space-y-2">
            {/* Decorative element */}
            <div className="w-full flex justify-center mb-6">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-200 via-pink-300 to-blue-200 rounded-full"></div>
            </div>

            {/* Menu Items - Bigger and more touch-friendly */}
            <MobileMenuItem
              active={activeSection === "home"}
              onClick={() => handleNavClick(homeRef)}
              icon={Home}
              label="Home"
            />
            <MobileMenuItem
              active={activeSection === "schedule"}
              onClick={() => handleNavClick(scheduleRef)}
              icon={Calendar}
              label="Schedule"
            />
            <MobileMenuItem
              active={activeSection === "location"}
              onClick={() => handleNavClick(locationRef)}
              icon={MapPin}
              label="Location"
            />
            <MobileMenuItem
              active={activeSection === "rsvp"}
              onClick={() => handleNavClick(rsvpRef)}
              icon={Mail}
              label="RSVP"
            />

            {/* Decorative footer */}
            <div className="mt-12 text-center space-y-4">
              <div className="flex justify-center">
                <Heart
                  className="w-8 h-8 text-pink-300/70"
                  fill="currentColor"
                />
              </div>
              <p className="font-['Playfair_Display'] italic text-gray-500 text-sm">
                &quot;Two souls with but a single thought, two hearts that beat
                as one&quot;
              </p>
              <div className="pt-4 text-center text-gray-400 text-xs">
                #KatrinaAndCharles2025
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Add PropTypes for ResponsiveHeader
ResponsiveHeader.propTypes = {
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
  homeRef: PropTypes.object.isRequired,
  scheduleRef: PropTypes.object.isRequired,
  locationRef: PropTypes.object.isRequired,
  rsvpRef: PropTypes.object.isRequired,
  weddingpartyRef: PropTypes.object,
};

// Desktop Navigation Link
const NavLink = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`px-4 sm:px-6 py-2 font-['Playfair_Display'] transition-all duration-300 relative group ${
      active ? "text-blue-500" : "text-gray-600 hover:text-blue-400"
    }`}
  >
    <span className="flex flex-col items-center gap-1">
      <Icon
        className={`w-4 h-4 ${
          active ? "text-pink-400" : "text-blue-400"
        } group-hover:scale-110 transition-transform`}
      />
      <span className="text-base sm:text-lg tracking-wide font-light italic transition-colors duration-300">
        {label}
      </span>
    </span>
    <span
      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 transform origin-left transition-transform duration-300 ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
    />
  </button>
);

NavLink.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

// New Mobile Menu Item - Larger and more touch-friendly
const MobileMenuItem = ({ active, onClick, icon: Icon, label }) => (
    <button
      onClick={onClick}
      className={`w-full py-4 px-4 flex items-center text-left rounded-xl transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-pink-50 to-blue-50 shadow-sm"
          : "hover:bg-gray-50"
      }`}
    >
      <div
        className={`mr-4 flex items-center justify-center w-10 h-10 rounded-full ${
          active ? "bg-gradient-to-br from-pink-100 to-blue-100" : "bg-gray-100"
        }`}
      >
        <Icon
          className={`w-5 h-5 ${active ? "text-pink-500" : "text-blue-400"}`}
        />
      </div>
      <span 
        className={`font-['Playfair_Display'] text-xl tracking-wide font-light italic transition-colors duration-300 ${
          active ? "text-gray-800" : "text-gray-600"
        }`}
      >
        {label}
      </span>
      {active && (
        <div className="ml-auto">
          <div className="w-2 h-2 rounded-full bg-pink-400"></div>
        </div>
      )}
    </button>
  );

MobileMenuItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default ResponsiveHeader;
