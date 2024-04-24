import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Wrapper from '@/components/util/Wrapper';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Amana International Industrial Company",
};

const page = () => {
    return (
        <div>
            <Wrapper>
                <div className='w-full px-2 pt-8 pb-16 md:px-10 md:py-12'>
                    <h1 className='md:text-xl leading-snug py-4 px-4 lg:px-8'>Contact us for any further questions. possible projects and business partnerships.</h1>
                    <div className='w-full w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
                        <div className='md:min-h-full w-full p-4 lg:p-8'>
                            <div className='flex flex-col gap-6'>
                                <h1 className='text-3xl md:text-4xl font-bold text-company-secondary'>Where to find us?</h1>

                                <div className="flex flex-col gap-2">
                                    <p className='text-black font-medium text-lg leading-snug'>
                                        Amana International Industrial Company
                                    </p>
                                    <div className='flex gap-4 text-black/70 w-fit'>
                                        <div className='p-1'>
                                            <MapPin size={22} />
                                        </div>
                                        <p className='text-lg leading-normal'>
                                            Hayat Commercial Center, <br />
                                            PO BOX 430639, Jeddah 23216 <br />
                                            Kingdom of Saudi Arabia <br />
                                        </p>
                                    </div>
                                </div>

                                <div className='flex gap-4 text-black/70 w-fit'>
                                    <div className='p-1'>
                                        <Phone size={22} />
                                    </div>
                                    <p className='text-lg'>
                                        +966 (012) 2631260
                                    </p>
                                </div>

                                <div className='flex gap-4 text-black/70 w-fit'>
                                    <div className="p-1">
                                        <Mail size={22} />
                                    </div>
                                    <p className='text-lg'>
                                        inquiry@amanaintl.com
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='h-full w-full flex flex-col gap-6 p-4 lg:p-8'>
                            <h1 className='text-3xl md:text-4xl font-bold text-company-secondary'>Send us a message</h1>

                            <div className='flex flex-col gap-2 w-full'>
                                <Label htmlFor='name'>Name</Label>
                                <Input id='name' type='text' />
                            </div>

                            <div className='flex flex-col lg:flex-row gap-2 '>
                                <div className='flex flex-col gap-2 w-full'>
                                    <Label htmlFor='phone'>Phone</Label>
                                    <Input id='phone' type='tel' />
                                </div>

                                <div className='flex flex-col gap-2 w-full'>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input id='email' type='email' />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 w-full'>
                                <Label htmlFor='message'>Message</Label>
                                <Textarea id='message' />
                            </div>

                            <Button className='bg-company-secondary hover:bg-company-tertiary w-fit'>
                                Send Message
                            </Button>

                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default page