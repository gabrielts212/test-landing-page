import Link from 'next/link';
import Logoheader from '@/components/assets/logoheader.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div >
        <Link href="/" passHref>
          <Image src={Logoheader} alt="Logo" />
          </Link>
      
        </div>
            <nav className="flex space-x-4">
              <Link href="/">
                <span className="hover:text-green-500">Home</span>
              </Link>
              <Link href="/features">
                <span className="hover:text-green-500">Features</span>
              </Link>
              <Link href="/pricing">
                <span className="hover:text-green-500">Pricing</span>
              </Link>
              <Link href="/class">
                <span className="hover:text-green-500">Class</span>
              </Link>
              <Link href="/about-us">
                <span className="hover:text-green-500">About Us</span>
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-l-full bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-full hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2024 Lerntolern. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
