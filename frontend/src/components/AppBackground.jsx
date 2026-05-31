import { useSelector } from "react-redux";
import SplashCursor from "./animations/SplashCursor";

function AppBackground({ children }) {
  // Pulling dark mode state from Redux to feed the cursor dynamic design tokens
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden bg-stone-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50 font-sans selection:bg-amber-500/20">


      {/* Main Context Grid / View Layer */}
      <div className="relative z-10">
        <SplashCursor
          DENSITY_DISSIPATION={4} // Slightly lower dissipation so the trailing path holds architectural structure a fraction longer
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.2}
          CURL={5}
          SPLAT_RADIUS={0.05}     // Thinner, sharper visual line footprint
          SPLAT_FORCE={4000}       // Muted splash impact force to prevent aggressive visual clutter
          SHADING={true}
          RAINBOW_MODE={false}
          COLOR={darkMode ? "#fbbf24" : "#e17100"}
        />
        {children}
      </div>

      {/* 
        Cleaned up global keyframe utility hooks.
        Removed the playful float utility to support static grid alignment frameworks.
      */}
      <style>{`
        body {
          background-color: ${darkMode ? "#09090b" : "#ffffff"};
        }
      `}</style>
    </div>
  );
}

export default AppBackground;
