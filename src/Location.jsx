import { MapPin, Navigation, Car, Bus, Train, Globe } from 'lucide-react';
import PropTypes from 'prop-types';

const LocationCard = ({ title, address, description, icon: Icon, className }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-50 relative group ${className}`}>
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
        <p className="text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

LocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  className: PropTypes.string
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
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

DirectionsCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Location = () => (
  <div className="w-full p-8 relative">
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <MapPin className="w-8 h-8 text-blue-400 animate-pulse" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
        </div>
        <h2 className="font-['Great_Vibes'] text-5xl text-gray-800">Location</h2>
        <p className="font-['Playfair_Display'] italic text-gray-600">Join us at these carefully chosen venues for our special day</p>
      </div>

      {/* Venues Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <LocationCard
          icon={MapPin}
          title="Ceremony Venue"
          address="San Guillermo Parish Church, San Guillermo Parish, Bacolor, Pampanga"
          description="A historic church rebuilt after the Mt. Pinatubo eruption, symbolizing resilience and enduring love. The ceremony will be held in this beautiful heritage site."
          className="md:transform md:hover:-rotate-1 transition-transform duration-500"
        />
        
        <LocationCard
          icon={MapPin}
          title="Reception Venue"
          address="The Garden Venue, Angeles City, Pampanga"
          description="An elegant garden setting with a perfect blend of natural beauty and modern amenities. Celebrate with us in this enchanting space."
          className="md:transform md:hover:rotate-1 transition-transform duration-500"
        />
      </div>

      {/* Directions Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-50 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_theme(colors.blue.200)_1px,_transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-['Great_Vibes'] text-4xl text-gray-800">How to Get There</h3>
            <p className="font-['Playfair_Display'] italic text-gray-600">Multiple convenient ways to reach our venues</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DirectionsCard
              icon={Car}
              title="By Car"
              description="45 minutes from San Fernando via MacArthur Highway. Free parking available at both venues."
            />
            <DirectionsCard
              icon={Bus}
              title="By Bus"
              description="Take any bus to Bacolor from Victory Liner Terminal. The church is a 5-minute tricycle ride from the town center."
            />
            <DirectionsCard
              icon={Train}
              title="By Train"
              description="Take PNR to San Fernando station. From there, it's a 20-minute drive to the venue."
            />
            <DirectionsCard
              icon={Navigation}
              title="Navigation"
              description="Both venues are easily findable on Google Maps and Waze. Look for 'San Guillermo Parish Church'."
            />
            <DirectionsCard
              icon={Globe}
              title="From Manila"
              description="2-hour drive via NLEX. Take the San Fernando exit and follow signs to Bacolor."
            />
            <DirectionsCard
              icon={Bus}
              title="Shuttle Service"
              description="We provide shuttle service between ceremony and reception venues for all guests."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Location;