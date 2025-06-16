import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer id="conecte-se-comigo" className="bg-gray-800 text-white py-8 ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-xl font-semibold">Conecte-se comigo</p>
        
        <div className="flex space-x-8">
          <a 
            href="https://www.linkedin.com/in/ana-paula-j-barros" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:text-blue-500"
          >
            <FaLinkedin size={35} />
          </a>
          <a 
            href="https://github.com/Anapjbarros" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:text-gray-400"
          >
            <FaGithub size={35} />
          </a>
          <a 
            href="mailto:anapjbarros@gmail.com" 
            className="transition-transform transform hover:scale-125 hover:text-red-400"
          >
            <MdEmail size={35} />
          </a>
          <a 
            href="https://wa.me/5511945229647" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:text-green-400"
          >
            <FaWhatsapp size={35} />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ana Paula Barros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
