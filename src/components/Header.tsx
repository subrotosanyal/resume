import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { CVHeader } from '../types/CVHeader'; // Import CVHeader type

const Header = ({ cv }: { cv: CVHeader }) => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">{cv.name}</h1>
          <h2 className="text-xl mb-4">{cv.title}</h2>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <a href={`mailto:${cv.email}`} className="flex items-center mb-2">
            <Mail size={18} className="mr-2" /> {cv.email}
          </a>
          <a href={`tel:${cv.phone}`} className="flex items-center mb-2">
            <Phone size={18} className="mr-2" /> {cv.phone}
          </a>
          <span className="flex items-center mb-2">
            <MapPin size={18} className="mr-2" /> {cv.location}
          </span>
          <div className="flex mt-2">
            <a href={cv.website} target="_blank" rel="noopener noreferrer" className="mr-4">
              <Globe size={24} />
            </a>
            <a href={cv.github} target="_blank" rel="noopener noreferrer" className="mr-4">
              <Github size={24} />
            </a>
            <a href={cv.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;