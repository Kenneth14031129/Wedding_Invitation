import { MapPin } from "lucide-react";
import PropTypes from "prop-types";

const LocationCard = ({
  title,
  address,
  description,
  icon: Icon,
  className,
}) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-50 relative group ${className}`}
  >
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

    <div className="flex items-start gap-4">
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-['Great_Vibes'] text-3xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="font-['Playfair_Display'] italic text-gray-600 leading-relaxed">
          {address}
        </p>
        <p className="text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

LocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

const DirectionsCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 group">
    <div className="shrink-0">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-gray-600" />
      </div>
    </div>
    <div>
      <h4 className="font-['Playfair_Display'] text-lg text-gray-700 font-medium mb-1">
        {title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

DirectionsCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const LocationSection = () => (
  <div className="w-full relative">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute top-1/3 -right-20 w-40 h-40 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-xl" />
      <div className="absolute bottom-1/3 -left-20 w-40 h-40 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-xl" />
    </div>

    {/* Falling petals animation - fewer petals than home section */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full bg-pink-100 opacity-40 animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 10}%`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

    {/* Content container with reduced padding on mobile */}
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 relative">
      {/* Romantic section header with smaller margins */}
      <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="relative">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-pulse" />
            <div className="absolute inset-0 blur-sm bg-pink-100 rounded-full opacity-30 animate-pulse" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>
        <h2 className="font-['Great_Vibes'] text-4xl sm:text-5xl text-gray-800 drop-shadow-sm">
          Location
        </h2>
        <p className="font-['Playfair_Display'] italic text-gray-600 text-sm sm:text-base">
          Join us at these carefully chosen venues for our special day
        </p>
      </div>

      {/* Responsive venues grid - stacks on mobile, side-by-side on larger screens */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Ceremony Venue Card */}
        <CompressedLocationCard
          icon={MapPin}
          title="Ceremony Venue"
          address="San Guillermo Parish Church, Bacolor, Pampanga"
          description="A historic church rebuilt after the Mt. Pinatubo eruption, symbolizing resilience and enduring love."
          className="md:transform md:hover:-rotate-1 transition-transform duration-500"
        />

        {/* Reception Venue Card */}
        <CompressedLocationCard
          icon={MapPin}
          title="Reception Venue"
          address="The Garden Venue, Angeles City, Pampanga"
          description="An elegant garden setting with a perfect blend of natural beauty and modern amenities."
          className="md:transform md:hover:rotate-1 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
);

// Compressed and responsive location card component
const CompressedLocationCard = ({
  title,
  address,
  description,
  icon: Icon,
  className,
}) => (
  <div
    className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-md border border-blue-50/50 relative group ${className}`}
  >
    {/* Elegant border gradients */}
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
    <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-pink-500/10 to-transparent" />

    <div className="flex items-start gap-3 sm:gap-4">
      <div className="shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 border border-pink-100/30">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-['Great_Vibes'] text-2xl sm:text-3xl text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="font-['Playfair_Display'] italic text-gray-600 text-sm sm:text-base leading-relaxed">
          {address}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>

        {/* View on map button - added for convenience */}
        <button className="mt-1 px-3 py-1 text-xs sm:text-sm text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-300 border border-blue-100/50 flex items-center gap-1 w-fit">
          <MapPin className="w-3 h-3" /> View on map
        </button>
      </div>
    </div>
  </div>
);

CompressedLocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

// Compressed directions card
const CompressedDirectionsCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-3 group">
    <div className="shrink-0">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 border border-pink-100/20">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </div>
    </div>
    <div>
      <h4 className="font-['Playfair_Display'] text-base sm:text-lg text-gray-700 font-medium mb-1">
        {title}
      </h4>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

CompressedDirectionsCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LocationSection;
