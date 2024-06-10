"use client";

import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Customers() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-white'>Customers</h1>
          <Button variant='outline' size='lg'>
            Add New Customer
          </Button>
        </header>
        <div className='mb-6'>
          <Input placeholder='Search customers...' className='w-full p-2' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Customer 1</CardTitle>
              <CardDescription>Details about Customer 1.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contact information and other details.</p>
            </CardContent>
            <CardFooter>
              <p>Additional notes for Customer 1.</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer 2</CardTitle>
              <CardDescription>Details about Customer 2.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contact information and other details.</p>
            </CardContent>
            <CardFooter>
              <p>Additional notes for Customer 2.</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer 3</CardTitle>
              <CardDescription>Details about Customer 3.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contact information and other details.</p>
            </CardContent>
            <CardFooter>
              <p>Additional notes for Customer 3.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
