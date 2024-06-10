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

export default function Projects() {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 text-foreground'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold text-white'>Projects</h1>
        </header>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Project Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Project Content</p>
            </CardContent>
            <CardFooter>
              <Button>View More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
