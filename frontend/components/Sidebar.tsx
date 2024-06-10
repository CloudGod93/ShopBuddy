"use client";

import { useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [shopName, setShopName] = useState("Tingley Auto Shop");
  const { user } = useUser();

  return (
    <aside className='w-48 bg-card p-4 shadow-md flex flex-col'>
      <div className='flex items-center space-x-2 mb-8'>
        <Image
          src='/shop.jpg'
          alt='Shop Image'
          width={32}
          height={32}
          className='rounded-full'
        />
        <span className='text-sm font-bold text-gray-400'>{shopName}</span>
      </div>
      <nav className='flex-1'>
        <ul className='space-y-4'>
          <li>
            <Link href='/dashboard' className='text-gray-300 hover:text-white'>
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
              href='/dashboard/customers'
              className='text-gray-300 hover:text-white'
            >
              Customers
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
              href='/dashboard/shop'
              className='text-gray-300 hover:text-white'
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/management'
              className='text-gray-300 hover:text-white'
            >
              Shop Management
            </Link>
          </li>
        </ul>
      </nav>
      <div className='mt-8'>
        <Button
          asChild
          variant='outline'
          size='lg'
          className='w-full flex items-center space-x-2 p-2'
        >
          <Link href='#'>
            <UserButton afterSignOutUrl='/' />
            <span className='text-sm font-bold text-gray-300'>
              {user?.fullName}
            </span>
          </Link>
        </Button>
      </div>
    </aside>
  );
}
