// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className='w-full p-4 bg-gray-900 text-white flex justify-between items-center shadow-md'>
      <div className='flex items-center space-x-2'>
        <Image
          src='/shopbuddy-noBack.png'
          alt='ShopBuddy Logo'
          width={40}
          height={40}
        />
        <span className='text-lg font-bold text-gray-200'>ShopBuddy</span>
      </div>
      <nav className='space-x-4'>
        <Link href='/' className='hover:underline'>
          Home
        </Link>
        <Link href='/about' className='hover:underline'>
          About
        </Link>
        <Link href='/contact' className='hover:underline'>
          Contact Us
        </Link>
        <Button variant='default' size='sm' asChild>
          <Link href='/dashboard'>Get Started</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
