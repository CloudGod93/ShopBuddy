"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Header />
      <main className='flex flex-col items-center justify-center flex-1 text-center p-4'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <h1 className='text-5xl font-bold mb-6 text-white'>
            Welcome to ShopBuddy
          </h1>
          <p className='text-2xl mb-12 text-gray-300'>
            Your ultimate tool for vehicle maintenance and repair. Find parts,
            prices, and labor times for your vehicle.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center mb-8'
        >
          <div>
            <LoginButton>
              <Button variant='default' size='lg'>
                Get Started
              </Button>
            </LoginButton>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mt-12 p-6 bg-card shadow-md rounded-md max-w-4xl text-left'
        >
          <h2 className='text-3xl font-semibold text-white mb-6'>
            What ShopBuddy Can Do:
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/db.jpg'
                alt='Comprehensive Parts Database'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Comprehensive Parts Database
              </h3>
              <p className='text-gray-300'>
                Access a vast database of parts and information for various
                vehicles, including pictures, leading auto part prices, and
                aftermarket options like eBay.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/realtimepricing.jpg'
                alt='Real-time Pricing'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Real-time Pricing
              </h3>
              <p className='text-gray-300'>
                Get the latest prices for vehicle parts from top suppliers and
                order directly through the app.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/ai-repair.jpeg'
                alt='AI-Driven Repair Guidance'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                AI-Driven Repair Guidance
              </h3>
              <p className='text-gray-300'>
                Use AI to guide mechanics through repairs, providing suggested
                times, shop fees, and price estimates.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/projectmanagement.jpg'
                alt='Project Management'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Project Management
              </h3>
              <p className='text-gray-300'>
                Create and manage projects for each vehicle repair, with
                detailed maintenance and repair reports.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/protool.jpeg'
                alt='Professional Tool for Mechanics'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Professional Tool for Mechanics
              </h3>
              <p className='text-gray-300'>
                Aimed towards single mechanics and mechanic shops, allowing
                profiles for each mechanic and professional-grade features.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/support.jpeg'
                alt='Multimedia Support'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Multimedia Support
              </h3>
              <p className='text-gray-300'>
                Integrate videos, pictures, and step-by-step guides to assist in
                repairs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/bill.jpeg'
                alt='Billing and Management'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                Billing and Management
              </h3>
              <p className='text-gray-300'>
                Manage billing with QuickBooks integration and Stripe for
                customer payments.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='bg-gray-800 p-4 rounded-lg shadow-lg'
            >
              <Image
                src='/aisupport.jpeg'
                alt='AI Support'
                width={100}
                height={100}
                className='mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold text-white mb-2'>
                AI Support
              </h3>
              <p className='text-gray-300'>
                AI assistance available for any questions or help during
                repairs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <footer className='w-full p-4 bg-card text-center text-gray-400'>
        <p>
          Created by{" "}
          <Link
            href='https://github.com/CloudGod5/ShopBuddy'
            className='underline'
          >
            CloudGod5
          </Link>
        </p>
      </footer>
    </div>
  );
}
