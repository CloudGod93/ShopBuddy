"use client";

import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

export default function ShopManagement() {
  const { user } = useUser();

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-white'>Shop Management</h1>
        </header>
        <div className='space-y-8'>
          <section>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              Current Employees
            </h2>
            <ul className='space-y-4'>
              {/* Placeholder for employee list */}
              <li className='text-gray-300'>Dillon Jordan - Mechanic</li>
              <li className='text-gray-300'>Steele Walker - Mechanic</li>
              {/* More employees can be added here */}
            </ul>
          </section>
          <section>
            <Button variant='outline' size='lg' className='mb-4'>
              Add Mechanic
            </Button>
            {/* Placeholder for the Add Mechanic form */}
            <form className='space-y-4'>
              <div>
                <label className='text-white'>Mechanic Name:</label>
                <input type='text' className='w-full p-2 rounded' />
              </div>
              <div>
                <label className='text-white'>Email:</label>
                <input type='email' className='w-full p-2 rounded' />
              </div>
              <div>
                <label className='text-white'>Role:</label>
                <input type='text' className='w-full p-2 rounded' />
              </div>
              <Button variant='outline' size='lg'>
                Submit
              </Button>
            </form>
          </section>
          <section>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              Account Billing
            </h2>
            {/* Placeholder for account billing management */}
            <p className='text-gray-300'>
              Manage account billing, add payment methods, and view billing
              history here.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
