import PictureFrame from "./assets/PictureFrame.png";

const LocationSection = () => (
  <div className="w-full max-w-6xl mx-auto px-4">
    {/* Content */}
    <div className="text-center text-white space-y-10">
      {/* Title */}
      <h2 className="font-['Imperial_Script'] text-7xl sm:text-7xl tracking-wide text-white drop-shadow-lg mb-8 mt-10 text-center">
        Location
      </h2>

      {/* Centered Picture Frame */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <img
            src={PictureFrame}
            alt="Wedding Location"
            className="w-full h-auto rounded-lg shadow-xl border-4 border-white/20"
          />
          <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-white/10"></div>
        </div>
      </div>

      {/* Transportation Information */}
      <div className="mt-6 w-full max-w-2xl mx-auto">
        <p className="font-['Playfair_Display'] italic text-base text-white/90 drop-shadow text-center">
          Transportation will be provided for guests. Shuttles will depart 30
          minutes after the ceremony concludes.
        </p>
      </div>
    </div>
  </div>
);

export default LocationSection;
