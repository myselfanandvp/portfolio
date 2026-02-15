import { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from '../redux/themeSlicer/themeslice';

const Navbar = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    useEffect(() => {
        if (mode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [mode]);

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-md border border-white/20 transition-colors duration-500
            ${mode ? 'bg-gray-900/50 border-gray-200/20' : 'bg-white/50 border-white/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo/Name */}
                    <div className="shrink-0">
                        <h1 className={`text-2xl font-bold transition-colors duration-500
                            ${mode ? 'text-white' : 'text-black'}`}>
                            Anand<span className="text-cyan-400">.dev</span>
                        </h1>
                    </div>

                    {/* Nav Links */}
                    <ul className="hidden md:flex space-x-8">
                        {['home', 'about', 'resume','projects', 'contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={item === 'home' ? '/' : item}
                                    className={`capitalize transition-colors duration-500
                                        ${mode 
                                            ? 'text-white hover:text-cyan-400' 
                                            : 'text-black hover:text-blue-500'}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Dark Mode Switch */}
                    <button
                        onClick={() => dispatch(toogleTheme())}
                        className={`p-2 rounded-lg transition-colors duration-500
                            ${mode 
                                ? 'bg-white/20 text-yellow-300 hover:bg-white/30' 
                                : 'bg-white/30 text-black hover:bg-white/40'}`}
                        aria-label="Toggle Dark Mode"
                    >
                        {mode ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
