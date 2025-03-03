import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Heart,
  Send,
  Users,
  PartyPopper,
  Phone,
  Mail,
  Music,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const CompressedRSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "attending",
    guests: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = "service_cmcvteo";
    const templateId = "template_2ff8nqs";
    const publicKey = "DDNDv9EoQW0qsLxCD";

    // Send the email using EmailJS
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          attendance: "attending",
          guests: "1",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-pink-100/40 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-1/3 -right-20 w-40 h-40 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 text-pink-200 opacity-30 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 10}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Heart fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Content container with reduced padding */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 relative">
        {/* Romantic section header with smaller margins */}
        <div className="text-center space-y-2 sm:space-y-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
            <div className="relative">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-pulse" />
              <div className="absolute inset-0 blur-sm bg-blue-100 rounded-full opacity-30 animate-pulse" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
          </div>
          <h2 className="font-['Great_Vibes'] text-4xl sm:text-5xl text-gray-800 drop-shadow-sm">
            RSVP
          </h2>
          <p className="font-['Playfair_Display'] italic text-gray-600 text-sm sm:text-base">
            We would be honored to have you join us on our special day
          </p>
          <div className="inline-block bg-gradient-to-r from-pink-50/70 via-pink-100/50 to-pink-50/70 rounded-lg px-3 py-1 mt-1">
            <p className="font-['Playfair_Display'] italic text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-2">
              Please respond by April 18, 2025
            </p>
          </div>
        </div>

        {/* Form Container - more compact */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-md border border-pink-100/50 relative">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_theme(colors.pink.200)_1px,_transparent_1px)] bg-[size:16px_16px]" />

          {/* Decorative corner flourishes */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-pink-200/60 fill-current"
            >
              <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
            </svg>
          </div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-blue-200/60 fill-current rotate-90"
            >
              <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-blue-200/60 fill-current -rotate-90"
            >
              <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-pink-200/60 fill-current rotate-180"
            >
              <path d="M0,0 Q30,10 40,40 Q45,20 60,10 Q50,30 60,50 Q40,45 20,60 Q30,40 0,0 Z" />
            </svg>
          </div>

          {/* Submission status message */}
          {submitStatus && (
            <div
              className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                submitStatus === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus === "success" ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Thank you! Your RSVP has been submitted successfully.
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again later.</span>
                </>
              )}
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative space-y-4 sm:space-y-6 p-2"
          >
            {/* Welcome message */}
            <div className="text-center mb-4 hidden sm:block">
              <div className="inline-flex items-center gap-2">
                <Music className="w-4 h-4 text-pink-400" />
                <p className="font-['Playfair_Display'] italic text-gray-500 text-sm">
                  We&apos;re excited to celebrate with you!
                </p>
                <Music className="w-4 h-4 text-blue-400" />
              </div>
            </div>

            {/* Name Field - more compact */}
            <div className="group relative">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <label className="font-['Playfair_Display'] italic text-gray-700 text-sm sm:text-base">
                  Your Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/70 border border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 text-sm sm:text-base font-['Playfair_Display'] italic"
                placeholder="Enter your full name"
              />
              <div className="absolute right-3 top-8 text-pink-200 opacity-30 hidden sm:block">
                <Heart size={14} fill="currentColor" />
              </div>
            </div>

            {/* Contact Fields - optimized for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700 text-sm sm:text-base">
                    Email
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/70 border border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 text-sm sm:text-base font-['Playfair_Display'] italic"
                  placeholder="Enter your email"
                />
              </div>

              <div className="group relative">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700 text-sm sm:text-base">
                    Phone
                  </label>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/70 border border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 text-sm sm:text-base font-['Playfair_Display'] italic"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Attendance and Guests - optimized for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="group relative">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <PartyPopper className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700 text-sm sm:text-base">
                    Will you attend?
                  </label>
                </div>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/70 border border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 text-sm sm:text-base font-['Playfair_Display'] italic"
                >
                  <option value="attending">Joyfully Accepting</option>
                  <option value="not-attending">Regretfully Declining</option>
                </select>
              </div>

              <div className="group relative">
                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <label className="font-['Playfair_Display'] italic text-gray-700 text-sm sm:text-base">
                    Number of Guests
                  </label>
                </div>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/70 border border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 text-sm sm:text-base font-['Playfair_Display'] italic"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message - simplified for mobile */}
            <div className="group relative">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Heart
                  className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400"
                  fill="currentColor"
                />
                <label className="font-['Playfair_Display'] italic text-gray-700 text-sm sm:text-base">
                  Message for the Couple
                </label>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-white/70 border border-pink-100 rounded-lg focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 h-20 sm:h-28 resize-none text-sm sm:text-base font-['Playfair_Display'] italic"
                placeholder="Share your wishes or message for us..."
              />

              {/* Decorative hearts in corners of textarea */}
              <div className="absolute right-2 bottom-2 text-pink-200 opacity-30">
                <Heart size={12} fill="currentColor" />
              </div>
              <div className="absolute left-2 bottom-2 text-blue-200 opacity-30">
                <Heart size={12} fill="currentColor" />
              </div>
            </div>

            {/* Submit Button - enhanced for romance */}
            <div className="flex justify-center pt-2 sm:pt-4 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-32 h-1 bg-gradient-to-r from-transparent via-pink-200/30 to-transparent"></div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-['Playfair_Display'] text-base sm:text-lg italic 
                ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:shadow-lg hover:scale-105"
                } 
                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300/50 focus:ring-offset-2`}
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                  {isSubmitting ? "Sending..." : "Send RSVP"}
                </span>
                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:scale-105 transition-transform duration-300"></div>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info - dietary restrictions notice */}
        <div className="mt-4 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50/70 via-blue-50/50 to-blue-50/70 rounded-lg px-3 py-2 border border-blue-100/30 shadow-sm">
            <p className="font-['Playfair_Display'] italic text-gray-600 text-xs sm:text-sm">
              Please let us know of any dietary restrictions or special requests
              in your message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompressedRSVP;
