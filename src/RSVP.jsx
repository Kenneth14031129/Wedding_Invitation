import { useState } from 'react';
import { Heart, Send, Users, PartyPopper, Phone, Mail } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: 'attending',
    guests: '1',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full p-8 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <Mail className="w-8 h-8 text-blue-400 animate-pulse" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          </div>
          <h2 className="font-['Great_Vibes'] text-5xl text-gray-800">RSVP</h2>
          <p className="font-['Playfair_Display'] italic text-gray-600">We would be honored to have you join us on our special day</p>
          <p className="text-gray-500">Please respond by April 18, 2025</p>
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-50 relative">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_theme(colors.blue.200)_1px,_transparent_1px)] bg-[size:20px_20px]" />
          
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-blue-200 rounded-tl-lg opacity-50" />
          <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-pink-200 rounded-tr-lg opacity-50" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-blue-200 rounded-bl-lg opacity-50" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-pink-200 rounded-br-lg opacity-50" />

          <form onSubmit={handleSubmit} className="relative space-y-8">
            {/* Name Field */}
            <div className="group">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-blue-400" />
                <label className="font-['Playfair_Display'] italic text-gray-700">Your Name</label>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/50 border border-blue-100 rounded-lg focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700">Email</label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 border border-blue-100 rounded-lg focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700">Phone</label>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/50 border border-blue-100 rounded-lg focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Attendance and Guests */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <PartyPopper className="w-4 h-4 text-blue-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700">Will you be attending?</label>
                </div>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 border border-blue-100 rounded-lg focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  <option value="attending">Joyfully Accepting</option>
                  <option value="not-attending">Regretfully Declining</option>
                </select>
              </div>

              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700">Number of Guests</label>
                </div>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/50 border border-blue-100 rounded-lg focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-blue-400" />
                <label className="font-['Playfair_Display'] italic text-gray-700">Message for the Couple</label>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/50 border border-blue-100 rounded-lg focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-32 resize-none"
                placeholder="Share your wishes or message for us..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-['Playfair_Display'] text-lg italic hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Send RSVP
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSVP;