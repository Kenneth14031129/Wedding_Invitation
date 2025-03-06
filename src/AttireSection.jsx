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
          <h2 className="font-['Imperial_Script'] text-6xl sm:text-7xl tracking-wide text-white drop-shadow-lg mb-8">
            Attire
          </h2>

          {/* Layout with images on sides */}
          <div className="flex items-center justify-between space-x-8">
            {/* Left Image */}
            <div className="w-1/4">
              <img
                src={AttireTheme}
                alt="Couple Attire Left"
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow">
              {/* Semi-formal section */}
              <div className="mb-10">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl uppercase tracking-wider mb-6 text-white drop-shadow">
                  SEMI-FORMAL
                </h3>
                <div className="space-y-3">
                  <p className="font-['Playfair_Display'] text-xl text-white drop-shadow">
                    Gentlemen: Dress shirt or Coat and Tie
                  </p>
                  <p className="font-['Playfair_Display'] text-xl text-white drop-shadow">
                    Ladies: Flowy Long or Knee length Dress
                  </p>
                  <p className="font-['Playfair_Display'] italic text-lg text-white drop-shadow">
                    (Cocktail or Long Dress)
                  </p>
                </div>
              </div>

              {/* Guests section */}
              <div className="mb-10">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl uppercase tracking-wider mb-6 text-white drop-shadow">
                  GUESTS
                </h3>
                <div className="space-y-4">
                  <p className="font-['Playfair_Display'] text-xl font-medium text-white drop-shadow">
                    Light Spring Pastel
                  </p>
                  <p className="font-['Playfair_Display'] italic text-lg text-white drop-shadow leading-relaxed">
                    Dress in the colors of the garden:
                    <br />
                    soft blues, blush pinks, and greens
                  </p>
                </div>
              </div>

              {/* Color swatches */}
              <div className="flex justify-center gap-4 mb-10">
                {[
                  "bg-green-100",
                  "bg-green-200",
                  "bg-blue-200",
                  "bg-blue-300",
                  "bg-pink-100",
                  "bg-pink-200",
                  "bg-purple-100",
                ].map((bgColor, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full ${bgColor} border-2 border-white/70 shadow-md transition transform hover:scale-110`}
                  />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="w-1/4">
              <img
                src={AttireTheme}
                alt="Couple Attire Right"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default AttireSection;
