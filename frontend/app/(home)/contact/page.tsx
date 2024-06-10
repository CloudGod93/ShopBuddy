"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Contact() {
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
          <h1 className='text-5xl font-bold mb-6 text-white'>Contact Us</h1>
          <p className='text-2xl mb-12 text-gray-300'>
            We would love to hear from you! Whether you have a question about
            our services, need assistance, or just want to give us feedback,
            feel free to reach out.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mt-12 p-6 bg-card shadow-md rounded-md max-w-4xl text-left'
        >
          <h2 className='text-3xl font-semibold text-white mb-6'>
            Get in Touch
          </h2>
          <form className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-white mb-2'>
                Your Name
              </label>
              <input
                type='text'
                className='w-full p-3 rounded bg-gray-700 text-white'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-white mb-2'>
                Your Email
              </label>
              <input
                type='email'
                className='w-full p-3 rounded bg-gray-700 text-white'
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-white mb-2'>
                Your Message
              </label>
              <textarea
                className='w-full p-3 rounded bg-gray-700 text-white'
                rows={4}
                placeholder='Enter your message'
              ></textarea>
            </div>
            <Button type='submit' variant='default' size='lg'>
              Send Message
            </Button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
