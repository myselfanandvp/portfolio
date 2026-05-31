import { useSelector } from "react-redux";
import SplashCursor from "./animations/SplashCursor";

function AppBackground({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden bg-stone-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50 font-sans selection:bg-amber-500/20">

      {/* Main Context Grid / View Layer */}
      <div className="relative z-10">
        <SplashCursor
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.2}
          CURL={5}
          SPLAT_RADIUS={darkMode ? 0.08 : 0.10}
          SPLAT_FORCE={4000}
          SHADING={true}
          RAINBOW_MODE={false}
          COLOR={darkMode ? "#FFFFFF" : "#fe9a00"}
        />

        {children}
      </div>

      <style>{`
        body {
          background-color: ${darkMode ? "#09090b" : "#ffffff"};
        }
      `}</style>
    </div>
  );
}

export default AppBackground;
