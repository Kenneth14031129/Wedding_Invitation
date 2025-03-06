import InvitationCard from "./assets/InvitationCard.jpg";
import { useState, useEffect } from "react";

const GroomsmenSection = () => {
  // State to track screen size for responsive adjustments
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // List of groomsmen data
  const groomsmenList = [
    "Mr. Nilo La Guardia",
    "Mr. Pacifico Garcia",
    "Archt. Melvin Garcia",
    "Mr. Kris La Guardia",
    "Mr. Robin Garcia",
    "Mr. Markneil La Guardia",
    "Mr. Darren Garcia",
    "Mr. Jay Garcia",
    "Mr. Robbi Garcia",
    "Mr. Jet Garcia",
    "Mr. Zachary Garcia",
    "Mr. Jat Garcia (Brother)",
    "Mr. Ryan Garcia (Father)",
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        {/* Content */}
        <div className="text-center text-white space-y-6 md:space-y-10">
          {/* Card with overlay text */}
          <div className="relative max-w-3xl mx-auto mt-6 sm:mt-10">
            {/* Card Image */}
            <img
              src={InvitationCard}
              alt="Invitation Card"
              className="w-full h-auto rounded-lg shadow-xl border-2 sm:border-4 border-white/20"
            />

            {/* Overlay Text Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-3 sm:p-5 md:p-8 flex flex-col justify-center">
                {/* Semi-transparent background for better text readability */}
                <div className="absolute inset-0 bg-white/50 rounded-lg"></div>

                {/* Title inside card */}
                <h2 className="font-['Imperial_Script'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-gray-800 mb-2 sm:mb-4 md:mb-6 text-center relative z-10">
                  13 Groomsmen
                </h2>

                {/* Groomsmen List */}
                <div
                  className={`grid ${
                    isMobile
                      ? "grid-cols-1 gap-y-1 text-xs"
                      : isTablet
                      ? "grid-cols-2 gap-x-2 gap-y-1 text-sm"
                      : "grid-cols-2 gap-x-4 gap-y-2 text-base"
                  } relative z-10 max-h-full overflow-y-auto px-1 sm:px-2`}
                >
                  {groomsmenList.map((groomsman, index) => (
                    <div
                      key={index}
                      className={`py-1 ${
                        index === groomsmenList.length - 1
                          ? "col-span-1 sm:col-span-2"
                          : ""
                      }`}
                    >
                      <p className="font-['Playfair_Display'] text-gray-800 text-center">
                        {groomsman}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomsmenSection;
