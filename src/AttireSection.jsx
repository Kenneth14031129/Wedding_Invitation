import BackgroundTheme from "./assets/BackgroundTheme.jpg";
import AttireTheme from "./assets/AttireTheme.png";

const AttireSection = () => (
  <div className="h-full min-h-screen bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackgroundTheme})`,
        filter: "brightness(0.9)",
      }}
    />

    <main className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Content */}
        <div className="text-center text-white space-y-10">
          {/* Title */}
          <h2 className="font-['Imperial_Script'] text-7xl sm:text-7xl tracking-wide text-white drop-shadow-lg mb-8 mt-10 text-center">
            Attire
          </h2>

          {/* Responsive Layout - Changes to single column on mobile */}
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-0 md:space-y-4">
            {/* Left Image - Hidden on small screens, shown on medium and up */}
            <div className="hidden md:block md:w-2/4">
              <img
                src={AttireTheme}
                alt="Couple Attire Left"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:flex-grow  p-6 md:p-8">
              {/* Semi-formal section */}
              <div className="mb-8 md:mb-10">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl uppercase tracking-wider mb-4 md:mb-6 text-white drop-shadow text-center">
                  SEMI-FORMAL
                </h3>
                <div className="space-y-3">
                  <p className="font-['Playfair_Display'] text-lg sm:text-xl text-white drop-shadow text-center">
                    Gentlemen: Dress shirt or Coat and Tie
                  </p>
                  <p className="font-['Playfair_Display'] text-lg sm:text-xl text-white drop-shadow text-center">
                    Ladies: Flowy Long or Knee length Dress
                  </p>
                  <p className="font-['Playfair_Display'] italic text-base sm:text-lg text-white drop-shadow text-center">
                    (Cocktail or Long Dress)
                  </p>
                </div>
              </div>

              {/* Guests section */}
              <div className="mb-8 md:mb-10">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl uppercase tracking-wider mb-4 md:mb-6 text-white drop-shadow text-center">
                  GUESTS
                </h3>
                <div className="space-y-4">
                  <p className="font-['Playfair_Display'] text-lg sm:text-xl font-medium text-white drop-shadow text-center">
                    Light Spring Pastel
                  </p>
                  <p className="font-['Playfair_Display'] italic text-base sm:text-lg text-white drop-shadow leading-relaxed text-center">
                    Dress in the colors of the garden:
                    <br className="hidden md:block" />
                    <span className="md:hidden"> </span>
                    soft blues, blush pinks, and greens
                  </p>
                </div>
              </div>

              {/* Color swatches - larger on mobile */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-10">
                {[
                  "bg-green-100",
                  "bg-green-200",
                  "bg-blue-200",
                  "bg-blue-300",
                  "bg-pink-100",
                  "bg-pink-200",
                ].map((bgColor, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgColor} border-2 border-white/70 shadow-md transition transform hover:scale-110`}
                  />
                ))}
              </div>
            </div>

            {/* Right Image - Hidden on small screens, shown on medium and up */}
            <div className="hidden md:block md:w-2/4">
              <img
                src={AttireTheme}
                alt="Couple Attire Right"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Mobile-only centered image at bottom */}
            <div className="block md:hidden w-1/2 mx-auto mt-4">
              <img
                src={AttireTheme}
                alt="Couple Attire"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default AttireSection;
