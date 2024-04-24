import { allLinksList } from '@/lib/constants'
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className='bg-company-secondary px-2 py-16'>
                <section className="mx-auto w-full max-w-[1366px] px-2 md:px-8">
                    <div className='w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.7fr_1fr]' >
                        <div className='flex flex-col gap-8'>

                            <div className='w-full'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-4 text-muted w-fit'>
                                        <div className='p-1'>
                                            <MapPin size={22} />
                                        </div>
                                        <p className='text-lg'>
                                            Hayat Commercial Center, <br />
                                            Jeddah 23216 <br />
                                            Kingdom of Saudi Arabia <br />
                                        </p>
                                    </div>

                                    <div className='flex gap-4 text-muted w-fit'>
                                        <div className='p-1'>
                                            <Phone size={22} />
                                        </div>
                                        <p className='text-lg'>
                                            +966 (012) 2631260
                                        </p>
                                    </div>

                                    <div className='flex gap-4 text-muted w-fit'>
                                        <div className="p-1">
                                            <Mail size={22} />
                                        </div>
                                        <p className='text-lg'>
                                            inquiry@amanaintl.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full min-h-[80px] grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-x-4 gap-y-4 rounded-lg '>
                            {allLinksList.map((nav) => <FooterLink key={nav.id} href={nav.href} title={nav.title} />)}
                        </div>
                    </div>
                </section>
            </div>
            <div className='w-full mx-auto text-sm bg-black p-2'>
                <p className='text-muted/60 leading-none text-center'>
                    © 2024 Amana International Industrial Company.<br className='md:hidden block' /> All rights reserved.
                </p>
            </div>
        </>
    )
}

const FooterLink = ({ href, title }: { href: string, title: string, }) => {
    return (
        <div className='flex gap-1 items-start items'>
            <div className=' py-[0.3rem]'>
                <ChevronRight className='text-white/80' size={15} />
            </div>
            <Link className='hover:text-company text-white text-base' href={href}>{title}</Link>
        </div>
    )
}

export default Footer