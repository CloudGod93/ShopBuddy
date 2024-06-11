"use client";

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
          </div>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1'>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Projects</h2>
            <p className='text-gray-300'>
              Manage your vehicle repair projects with ease.
            </p>
            <Button variant='outline' size='lg'>
              <Link href='./projects'>Go to Projects</Link>
            </Button>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Shop</h2>
            <p className='text-gray-300'>
              Browse and order parts for vehicles quickly and efficiently.
            </p>
            <Button variant='outline' size='lg'>
              <Link href='./shop'>Shop products</Link>
            </Button>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Reports</h2>
            <p className='text-gray-300'>
              View detailed maintenance and repair reports to keep track of your
              work.
            </p>
            <Button variant='outline' size='lg'>
              <Link href='./reports'>View/Manage Reports</Link>
            </Button>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Guides</h2>
            <p className='text-gray-300'>
              Access repair guides and multimedia support for detailed
              instructions.
            </p>
            <Button variant='outline' size='lg'>
              <Link href='./guides'>Guides and Tutorials</Link>
            </Button>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Billing</h2>
            <p className='text-gray-300'>
              Manage billing and payments with QuickBooks and Stripe
              integration.
            </p>
            <Button variant='outline' size='lg'>
              <Link href='./billing'>Go to Billing</Link>
            </Button>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              Customers
            </h2>
            <p className='text-gray-300'>
              Manage your customers and view their details.
            </p>
            <Button variant='outline' size='lg'>
              <Link href='./customers'>Manage Customers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
