import PropTypes from 'prop-types';
import { Heart, UserCircle2 } from 'lucide-react';

const PartyMemberCard = ({ name, role, relationship, description }) => (
  <div className="group relative">
    <div className="absolute -top-2 -right-2 z-10">
      <Heart className="w-6 h-6 text-pink-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-50 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 h-full">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-blue-200 rounded-tl-lg opacity-30" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-pink-200 rounded-tr-lg opacity-30" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-blue-200 rounded-bl-lg opacity-30" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-pink-200 rounded-br-lg opacity-30" />
      
      <div className="flex flex-col items-center space-y-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-pink-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <UserCircle2 className="w-16 h-16 text-gray-400" />
          </div>
          
          {/* Role badge */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-medium shadow-md whitespace-nowrap">
              {role}
            </div>
          </div>
        </div>
        
        {/* Name and details */}
        <div className="text-center space-y-2 pt-4">
          <h3 className="font-['Great_Vibes'] text-2xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="font-['Playfair_Display'] italic text-gray-600 text-sm">
            {relationship}
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

PartyMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const WeddingParty = () => {
  const partyMembers = [
    {
      name: "Sarah Johnson",
      role: "Maid of Honor",
      relationship: "Sister of the bride",
      description: "Sister of the bride and best friend since birth. Always there through thick and thin."
    },
    {
      name: "Michael Smith",
      role: "Best Man",
      relationship: "Brother of the groom",
      description: "Brother of the groom and adventure companion. The voice of reason and endless support."
    },
    {
      name: "Emily Davis",
      role: "Bridesmaid",
      relationship: "Friend since college",
      description: "Friend since college days. Sharing countless memories and laughter together."
    },
    {
      name: "James Wilson",
      role: "Groomsman",
      relationship: "Childhood friend",
      description: "Childhood friend and partner in crime. Always ready for the next adventure."
    }
  ];

  return (
    <div className="w-full p-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <Heart className="w-8 h-8 text-blue-400 animate-pulse" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          </div>
          <h2 className="font-['Great_Vibes'] text-5xl text-gray-800">Wedding Party</h2>
          <p className="font-['Playfair_Display'] italic text-gray-600">
            Meet our cherished friends and family who will stand with us
          </p>
        </div>

        {/* Party Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partyMembers.map((member, index) => (
            <PartyMemberCard
              key={index}
              name={member.name}
              role={member.role}
              relationship={member.relationship}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;