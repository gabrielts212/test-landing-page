import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        <div className="flex items-center">
          {/* <Link href="/" passHref>
            <image 
              src="/assets/logoheader.png" 
              alt="Logo" 
              width={50} 
              height={50} 
       
            />
          </Link> */}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}></path>
            </svg>
          </button>
        </div>
        <nav className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <Link href="/" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">Home</span>
          </Link>
          <Link href="/features" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">Features</span>
          </Link>
          <Link href="/pricing" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">Pricing</span>
          </Link>
          <Link href="/class" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">Class</span>
          </Link>
          <Link href="/about-us" passHref>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-400 cursor-pointer">About Us</span>
          </Link>
        </nav>
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto mt-4 lg:mt-0`}>
          <Link href="/loginpage" passHref>
            <button className="block lg:inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">LOG IN</button>
          </Link>
          <Link href="/registerpage" passHref>
            <button className="block lg:inline-block border border-green-500 text-green-500 hover:text-green-400 hover:border-green-400 font-bold py-2 px-4 rounded-full">SIGN IN</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
