"use client";

import Sidebar from "@/components/Sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Billing() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-white'>Billing</h1>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Billing 1</CardTitle>
              <CardDescription>Description for Billing 1.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about Billing 1.</p>
            </CardContent>
            <CardFooter>
              <p>Footer content for Billing 1.</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Billing 2</CardTitle>
              <CardDescription>Description for Billing 2.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about Billing 2.</p>
            </CardContent>
            <CardFooter>
              <p>Footer content for Billing 2.</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Billing 3</CardTitle>
              <CardDescription>Description for Billing 3.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about Billing 3.</p>
            </CardContent>
            <CardFooter>
              <p>Footer content for Billing 3.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
