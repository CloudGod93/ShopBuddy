"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";

export default function About() {
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
          <h1 className='text-5xl font-bold mb-6 text-white'>About Us</h1>
          <p className='text-2xl mb-12 text-gray-300'>
            ShopBuddy is dedicated to providing the best tools for vehicle
            maintenance and repair. Our mission is to empower mechanics and
            vehicle owners with the information and tools they need to keep
            their vehicles in top condition.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mt-12 p-6 bg-card shadow-md rounded-md max-w-4xl text-left'
        >
          <h2 className='text-3xl font-semibold text-white mb-6'>Our Story</h2>
          <p className='text-gray-300 mb-4'>
            Founded in 2023, ShopBuddy started with the vision of simplifying
            vehicle maintenance for everyone. Our team is composed of
            experienced mechanics, software developers, and automotive
            enthusiasts who are passionate about making vehicle care accessible,
            efficient, and affordable.
          </p>
          <h2 className='text-3xl font-semibold text-white mb-6'>Our Team</h2>
          <p className='text-gray-300'>
            We are a team of dedicated professionals with diverse backgrounds
            and expertise in the automotive industry and technology. Our goal is
            to continuously innovate and improve our platform to meet the needs
            of our users.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
