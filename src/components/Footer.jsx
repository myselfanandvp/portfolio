import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden">

    

      {/* ⭐ Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Name & Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Anand<span className="text-blue-600">.dev</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-1">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 text-sm mb-4 md:mb-0">
            {['home', 'about', 'resume', 'contact', 'projects'].map((item) => (
              <Link
                key={item}
                to={item === "home" ? '/' : `/${item}`}
                className="capitalize text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <SocialIcon url="https://github.com" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://gitlab.com" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://x.com" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://linkedin.com" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://discord.com" style={{ height: 32, width: 32 }} />
            <SocialIcon url="https://whatsapp.com" style={{ height: 32, width: 32 }} />
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
