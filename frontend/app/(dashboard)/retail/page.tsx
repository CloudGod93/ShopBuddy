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
import { Button } from "@/components/ui/button";

export default function Shop() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-white'>Shop</h1>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Shop Item 1</CardTitle>
              <CardDescription>Description for Shop Item 1.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about Shop Item 1.</p>
            </CardContent>
            <CardFooter>
              <Button variant='outline' size='lg'>
                View Item
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shop Item 2</CardTitle>
              <CardDescription>Description for Shop Item 2.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about Shop Item 2.</p>
            </CardContent>
            <CardFooter>
              <Button variant='outline' size='lg'>
                View Item
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shop Item 3</CardTitle>
              <CardDescription>Description for Shop Item 3.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Details about Shop Item 3.</p>
            </CardContent>
            <CardFooter>
              <Button variant='outline' size='lg'>
                View Item
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
