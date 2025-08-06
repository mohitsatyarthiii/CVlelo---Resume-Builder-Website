import { LayoutTemplate } from "lucide-react";
import { Link, useMatch } from "react-router-dom";
import { ProfileInfoCard } from "./Cards";

const Navbar = () => {
  // Match /resume/:resumeId
  const isOnResumePage = useMatch("/resume/:resumeId");

  return (
    <div className="h-22 bg-white/70 backdrop-blur-xl border-b border-violet-100/50 px-4 md:px-0 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full gap-5">
        <Link to="/" className="flex items-center gap-3 h-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200">
              <LayoutTemplate className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              CVlelo
            </span>
          </div>
        </Link>

        <div className="flex items-center h-full gap-3">
          {isOnResumePage && (
            <Link
              to="/dashboard"
              className="relative inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-md shadow-violet-400/30 transition-transform duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/50 group"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full blur-sm"></span>
              <span className="relative z-10">Dashboard</span>
            </Link>
          )}
          <ProfileInfoCard />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
