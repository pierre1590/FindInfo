// components/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed inset-x-0 bottom-0">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg">Created by <span className="font-semibold">Piero Sabino</span></p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/pierosabino" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-700 fa-lg" />
          </a>
          <a href="https://github.com/pierre1590" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400 fa-lg" />
          </a>
          <a href="https://www.instagram.com/piero_sabino1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-600 fa-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



