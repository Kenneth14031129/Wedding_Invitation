import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import WeddingPhoto from './assets/Wedding.jpg';
import { Heart, Stars, Sparkles, MapPin, Calendar, Home, Mail, Music, Clock, ChurchIcon, GlassWater, Camera, PartyPopper, Users, } from 'lucide-react';
import LocationSection from './Location.jsx';
import RSVP from './RSVP.jsx';
import WeddingParty from './WeddingParty.jsx';

const NavLink = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 font-['Playfair_Display'] transition-all duration-300 relative group ${
      active 
        ? 'text-blue-500' 
        : 'text-gray-600 hover:text-blue-400'
    }`}
  >
    <span className="text-xl tracking-wide font-light italic transition-colors duration-300">
      {children}
    </span>
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 transform origin-left transition-transform duration-300 ${
      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
    }`} />
  </button>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

NavLink.defaultProps = {
  active: false,
  onClick: () => {}
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
        <p className="font-['Playfair_Display'] italic text-lg text-gray-500">{time}</p>
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
  description: PropTypes.string.isRequired
};

const ScheduleSection = () => (
  <div className="w-full p-8 relative">
    <div className="max-w-3xl mx-auto space-y-12 relative">
      <div className="text-center space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <Calendar className="w-8 h-8 text-blue-400 animate-pulse" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>
        <h2 className="font-['Great_Vibes'] text-5xl text-gray-800">Schedule</h2>
        <p className="font-['Playfair_Display'] italic text-gray-600">Join us in celebrating our special day</p>
      </div>

      <div className="space-y-12 relative">
        <TimelineEvent
          time="1:00 PM"
          title="Guest Arrival"
          icon={Clock}
          description="Welcome drinks and seating at the San Guillermo Parish Church"
        />
        <TimelineEvent
          time="2:00 PM"
          title="Wedding Ceremony"
          icon={ChurchIcon}
          description="Holy Matrimony at the historic San Guillermo Parish Church"
        />
        <TimelineEvent
          time="3:30 PM"
          title="Cocktail Hour"
          icon={GlassWater}
          description="Cocktails, hors d'oeuvres, and live music at the garden reception"
        />
        <TimelineEvent
          time="4:00 PM"
          title="Photo Session"
          icon={Camera}
          description="Family and group photos in the church grounds"
        />
        <TimelineEvent
          time="5:00 PM"
          title="Reception Celebration"
          icon={PartyPopper}
          description="Dinner, dancing, and festivities at the reception venue"
        />
      </div>
    </div>
  </div>
);

const WeddingInvitation = () => {
  const [activeSection, setActiveSection] = useState('home');
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
        behavior: 'smooth'
      });
    }
  };

  // Updated scroll detection with proper offset
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = 80;
  
      if (homeRef.current && scheduleRef.current && locationRef.current && rsvpRef.current && weddingpartyRef.current) {
        const homeOffset = homeRef.current.offsetTop - headerHeight;
        const scheduleOffset = scheduleRef.current.offsetTop - headerHeight;
        const locationOffset = locationRef.current.offsetTop - headerHeight;
        const rsvpOffset = rsvpRef.current.offsetTop - headerHeight;
        const weddingpartyOffset = weddingpartyRef.current.offsetTop - headerHeight;
  
        if (scrollPosition >= weddingpartyOffset) {
          setActiveSection('weddingparty');
        } else if (scrollPosition >= rsvpOffset) {
          setActiveSection('rsvp');
        } else if (scrollPosition >= locationOffset) {
          setActiveSection('location');
        } else if (scrollPosition >= scheduleOffset) {
          setActiveSection('schedule');
        } else if (scrollPosition >= homeOffset) {
          setActiveSection('home');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-70" />
        <div className="absolute top-1/2 -right-4 w-72 h-72 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-50/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70" />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-orange-50/80 via-white/80 to-orange-100/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between px-6 py-4">
            {/* Brand */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection(homeRef)}>
              <Heart className="w-5 h-5 text-blue-400" fill="currentColor" />
              <span className="font-['Great_Vibes'] text-2xl text-gray-800">K & C</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-4">
              <NavLink 
                active={activeSection === 'home'} 
                onClick={() => scrollToSection(homeRef)}
              >
                <div className="flex flex-col items-center gap-1 group">
                  <Home className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  Home
                </div>
              </NavLink>
              <NavLink 
                active={activeSection === 'schedule'} 
                onClick={() => scrollToSection(scheduleRef)}
              >
                <div className="flex flex-col items-center gap-1 group">
                  <Calendar className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  Schedule
                </div>
              </NavLink>
              <NavLink 
                active={activeSection === 'location'} 
                onClick={() => scrollToSection(locationRef)}
              >
                <div className="flex flex-col items-center gap-1 group">
                  <MapPin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  Location
                </div>
              </NavLink>
              <NavLink 
                active={activeSection === 'rsvp'} 
                onClick={() => scrollToSection(rsvpRef)}
              >
                <div className="flex flex-col items-center gap-1 group">
                  <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  RSVP
                </div>
              </NavLink>
              <NavLink 
                active={activeSection === 'weddingparty'} 
                onClick={() => scrollToSection(weddingpartyRef)}
              >
                <div className="flex flex-col items-center gap-1 group">
                  <Users className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  Wedding Party
                </div>
              </NavLink>
            </div>

            {/* Mobile RSVP */}
            <div className="md:hidden">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-['Great_Vibes'] text-xl hover:opacity-90 transition-opacity">
                RSVP
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Home Section */}
            <div ref={homeRef} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden relative border border-gradient-to-r from-blue-100 to-pink-100 mb-12">
              {/* Enhanced decorative borders */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-50" />
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-200 rounded-tl-lg opacity-50" />
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-pink-200 rounded-tr-lg opacity-50" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-blue-200 rounded-bl-lg opacity-50" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-pink-200 rounded-br-lg opacity-50" />
              
              <div className="flex flex-col md:flex-row items-stretch min-h-[600px]">
                {/* Enhanced Left Section with Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
                  <div className="relative w-full h-[calc(100%-2rem)] max-h-[800px] group">
                    <div className="absolute inset-0 border border-blue-100 rounded-lg transform -rotate-1 transition-transform duration-500 group-hover:rotate-1" />
                    <div className="absolute inset-0 border border-pink-100 rounded-lg transform rotate-1 transition-transform duration-500 group-hover:-rotate-1" />
                    
                    <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <img
                        src={WeddingPhoto}
                        alt="Katrina and Charles"
                        className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      
                      {/* Image Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 border-4 border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4" />
                    </div>

                    {/* Enhanced decorative elements */}
                    <div className="absolute top-4 left-4 animate-pulse">
                      <Heart className="w-6 h-6 text-blue-400/50" fill="currentColor" />
                    </div>
                    <div className="absolute top-4 right-4 animate-pulse animation-delay-2000">
                      <Music className="w-6 h-6 text-pink-400/50" />
                    </div>
                    <div className="absolute bottom-4 left-4 animate-pulse animation-delay-4000">
                      <Sparkles className="w-6 h-6 text-blue-400/50" />
                    </div>
                    <div className="absolute bottom-4 right-4 animate-pulse">
                      <Stars className="w-6 h-6 text-pink-400/50" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Right Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative group">
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_theme(colors.blue.200)_1px,_transparent_1px)] bg-[size:20px_20px]" />
                  <div className="max-w-lg w-full space-y-12 relative">
                    <div className="flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                      <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
                    </div>

                    <div className="text-center space-y-8">
                      <h1 className="text-6xl md:text-7xl font-['Great_Vibes'] tracking-wide text-blue-800 hover:text-blue-600 transition-colors duration-500">
                        Katrina
                      </h1>
                      <div className="flex items-center justify-center gap-4 my-4">
                        <div className="w-12 h-px bg-gradient-to-r from-blue-200 to-pink-200" />
                        <Heart className="w-8 h-8 text-pink-400 animate-pulse" fill="currentColor" />
                        <div className="w-12 h-px bg-gradient-to-r from-pink-200 to-blue-200" />
                      </div>
                      <h1 className="text-6xl md:text-7xl font-['Great_Vibes'] tracking-wide text-pink-800 hover:text-pink-600 transition-colors duration-500">
                        Charles
                      </h1>
                    </div>

                    <div className="text-center space-y-10">
                      <p className="text-2xl font-['Playfair_Display'] italic text-gray-600 font-light tracking-widest">
                        May 18, 2025
                      </p>
                      <div className="flex items-center justify-center gap-3 text-xl text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-blue-300" />
                        <span className="font-['Playfair_Display'] italic">3 PM</span>
                        <span className="w-2 h-2 rounded-full bg-pink-300" />
                      </div>
                      <div className="space-y-3">
                        <p className="font-['Great_Vibes'] text-4xl text-gray-800">
                          Bacolor, Pampanga
                        </p>
                        <p className="font-['Playfair_Display'] italic text-gray-500">
                          and Online via Live Stream
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                      <Stars className="w-5 h-5 text-pink-400" />
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
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

          {/* Wedding Party Section */}
          <div ref={weddingpartyRef} className="mt-8">
              <WeddingParty />
            </div>

      {/* Updated Footer without white background */}
      <footer className="w-full mt-20 relative">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-50/50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 py-12 relative">
          {/* Top Section with Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          </div>

          {/* Bottom Section with Divider - Updated border color */}
          <div className="pt-8 border-t border-gray-300/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
                <span className="font-['Great_Vibes'] text-2xl text-gray-800">Katrina & Charles</span>
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