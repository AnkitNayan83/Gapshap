import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Featured = () => {
    return (
        <div>
            <h1 className="text-[44px] md:text-[54px] my-14"> <span className="font-bold">Are you up for some  GapShap 😊.</span> Discover great stories and creative ideas on variety of topics.</h1>

            <div className='flex flex-col md:flex-row items-center gap-8 mt-20'>
                <div className='relative w-[100%] md:flex-1 h-[40vh]'>
                    <Image src={"/culture.png"} alt='featured' fill={true} className='object-cover' />
                </div>
                <div className='flex flex-col gap-6 items-start flex-1'>
                    <h1 className='font-bold text-[32px]'>This is a trending post!!!</h1>
                    <p className='text-justify text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda fugiat, rerum accusamus itaque libero possimus soluta pariatur tempora ratione non ex quas provident ad asperiores quaerat, at vero dicta.
                    </p>
                    <Button className='bg-[hsl(var(--foreground))] text-[hsl(var(--background))]'>Read More</Button>
                </div>
            </div>

        </div>
    )
}

export default Featured