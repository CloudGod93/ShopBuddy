"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <aside className='w-full lg:w-64 bg-card p-4 shadow-md flex flex-col'>
        <div className='flex items-center space-x-4 mb-8'>
          <Image
            src='/shopbuddy-noBack.png'
            alt='ShopBuddy Logo'
            width={50}
            height={50}
          />
          <span className='text-xl font-bold text-white'>ShopBuddy</span>
        </div>
        <nav className='flex-1'>
          <ul className='space-y-4'>
            <li>
              <Link
                href='/dashboard'
                className='text-gray-300 hover:text-white'
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/projects'
                className='text-gray-300 hover:text-white'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/shop'
                className='text-gray-300 hover:text-white'
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/reports'
                className='text-gray-300 hover:text-white'
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/guides'
                className='text-gray-300 hover:text-white'
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/billing'
                className='text-gray-300 hover:text-white'
              >
                Billing
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/ai-assistance'
                className='text-gray-300 hover:text-white'
              >
                AI Assistance
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className='flex-1 p-6 flex flex-col'>
        <header className='flex justify-between items-center mb-6'>
          <div className='flex items-center space-x-4'>
            {user?.imageUrl && (
              <Image
                src={user.imageUrl}
                alt='User profile picture'
                width={50}
                height={50}
                className='rounded-full'
              />
            )}
            <h1 className='text-3xl font-bold text-white'>
              Welcome, {user?.firstName || "User"}
            </h1>
          </div>
          <UserButton afterSignOutUrl='/' />
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1'>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Projects</h2>
            <p className='text-gray-300'>
              Manage your vehicle repair projects with ease.
            </p>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Shop</h2>
            <p className='text-gray-300'>
              Browse and order parts for vehicles quickly and efficiently.
            </p>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Reports</h2>
            <p className='text-gray-300'>
              View detailed maintenance and repair reports to keep track of your
              work.
            </p>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Guides</h2>
            <p className='text-gray-300'>
              Access repair guides and multimedia support for detailed
              instructions.
            </p>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Billing</h2>
            <p className='text-gray-300'>
              Manage billing and payments with QuickBooks and Stripe
              integration.
            </p>
          </div>
          <div className='bg-card p-4 shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              AI Assistance
            </h2>
            <p className='text-gray-300'>
              Get AI assistance for repair questions and guidance.
            </p>
          </div>
        </div>
        <footer className='mt-6 w-full p-4 bg-card text-center text-gray-400'>
          <p>
            Created by{" "}
            <Link href='https://github.com/CloudGod5' className='underline'>
              CloudGod5
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
