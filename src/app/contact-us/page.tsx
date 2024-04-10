import type { Metadata } from "next";
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import DualSection from '@/components/util/DualSection'
import Wrapper from '@/components/util/Wrapper'
import { Building2, Mail, Phone } from 'lucide-react'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Us - Amana International Industrial Company",
};

const page = () => {
    return (
        <DualSection imgSide='left'>
            <div className='md:min-h-full w-full bg-gradient-to-br from-indigo-100 via-muted/50 to-muted rounded-lg p-8'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-3xl font-bold'>Get In Touch</h1>

                    <p className='text-muted-foreground text-lg leading-snug'>
                        Have a question or need more information? We&apos;re here to help! <br />
                        Just drop us a message using the form below, and we&apos;ll get back to you pronto.
                    </p>

                    <div className='flex gap-4 text-muted-foreground w-fit'>
                        <div className='p-1'>
                            <Building2 size={22} />
                        </div>
                        <p className='text-lg'>
                            Opp. Ittihad Sports Club, <br />
                            Mushrefah, Jeddah 23341 <br />
                            Kingdom of Saudi Arabia <br />
                        </p>
                    </div>

                    <div className='flex gap-4 text-muted-foreground w-fit'>
                        <div className='p-1'>
                            <Phone size={22} />
                        </div>
                        <p className='text-lg'>
                            +966 12 287 0084
                        </p>
                    </div>

                    <div className='flex gap-4 text-muted-foreground w-fit'>
                        <div className="p-1">
                            <Mail size={22} />
                        </div>
                        <p className='text-lg'>
                            inquiry@amana.com
                        </p>
                    </div>
                </div>
            </div>


            <div className='h-full w-full flex flex-col gap-4 p-8'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='flex flex-col gap-4 w-full'>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input id='firstName' type='text' />
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input id='lastName' type='text' />
                    </div>
                </div>

                <div className='flex flex-col gap-4 w-full'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' />
                </div>

                <div className='flex flex-col gap-4 w-full'>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input id='phone' type='tel' />
                </div>

                <div className='flex flex-col gap-4 w-full'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea id='message' />
                </div>

                <div className='flex justify-end'>
                    <Button className='bg-indigo-600 hover:bg-indigo-800'>
                        Send Message
                    </Button>
                </div>

            </div>
        </DualSection>
    )
}

export default page