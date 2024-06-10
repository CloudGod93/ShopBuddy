"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <header className='w-full p-4 bg-card shadow-md flex justify-center items-center'>
        <Image
          src='/shopbuddy-noBack.png'
          alt='ShopBuddy Logo'
          width={200}
          height={200}
        />
      </header>
      <main className='flex flex-col items-center justify-center flex-1 text-center p-4'>
        <h1 className='text-4xl font-bold mb-6 text-white'>
          Welcome to ShopBuddy
        </h1>
        <p className='text-xl mb-12 text-gray-300'>
          Your ultimate tool for vehicle maintenance and repair. Find parts,
          prices, and labor times for your vehicle.
        </p>
        <div className='flex justify-center mb-8'>
          <Button variant='default' size='lg' onClick={handleGetStartedClick}>
            Get Started
          </Button>
        </div>
        <div className='mt-12 p-6 bg-card shadow-md rounded-md max-w-4xl text-left'>
          <h2 className='text-2xl font-semibold text-white mb-4'>
            What ShopBuddy Can Do:
          </h2>
          <ul className='text-gray-300 space-y-2'>
            <li>
              🔧 <strong>Comprehensive Parts Database:</strong> Access a vast
              database of parts and information for various vehicles, including
              pictures, leading auto part prices, and aftermarket options like
              eBay.
            </li>
            <li>
              💰 <strong>Real-time Pricing:</strong> Get the latest prices for
              vehicle parts from top suppliers and order directly through the
              app.
            </li>
            <li>
              ⏱️ <strong>AI-Driven Repair Guidance:</strong> Use AI to guide
              mechanics through repairs, providing suggested times, shop fees,
              and price estimates.
            </li>
            <li>
              📊 <strong>Project Management:</strong> Create and manage projects
              for each vehicle repair, with detailed maintenance and repair
              reports.
            </li>
            <li>
              🔍 <strong>Professional Tool for Mechanics:</strong> Aimed towards
              single mechanics and mechanic shops, allowing profiles for each
              mechanic and professional-grade features.
            </li>
            <li>
              📹 <strong>Multimedia Support:</strong> Integrate videos,
              pictures, and step-by-step guides to assist in repairs.
            </li>
            <li>
              💼 <strong>Billing and Management:</strong> Manage billing with
              QuickBooks integration and Stripe for customer payments.
            </li>
            <li>
              🔧 <strong>AI Support:</strong> AI assistance available for any
              questions or help during repairs.
            </li>
          </ul>
        </div>
      </main>
      <footer className='w-full p-4 bg-card text-center text-gray-400'>
        <p>
          Created by{" "}
          <Link href='https://github.com/CloudGod5' className='underline'>
            CloudGod5
          </Link>
        </p>
      </footer>
    </div>
  );
}
