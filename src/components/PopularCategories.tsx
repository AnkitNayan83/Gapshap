import Image from 'next/image'
import React from 'react'

const PopularCategories = () => {
    return (
        <div className='flex flex-col gap-10 my-10'>
            <h1 className='font-bold text-[32px]'>Popular Categories</h1>

            <div className='flex flex-wrap gap-16 mb-4'>
                <div className='flex justify-center items-center gap-2 bg-blue-300 rounded-md w-[100%] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_20px_2px] cursor-pointer'>
                    <Image src={"/coding.jpg"} width={50} height={50} alt='' className='rounded-[50%] object-cover' />
                    <span className='text-xl font-bold'>Coding</span>
                </div>
                <div className='flex justify-center items-center gap-2 bg-red-300 rounded-md w-[100%] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_20px_2px] cursor-pointer'>
                    <Image src={"/politics.jpg"} width={40} height={30} alt='' className='rounded-[50%] object-cover' />
                    <span className='text-xl font-bold'>Politics</span>
                </div>
                <div className='flex justify-center items-center gap-2 bg-green-300 rounded-md w-[100%] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_20px_2px] cursor-pointer'>
                    <Image src={"/colleges.jpg"} width={50} height={50} alt='' className='rounded-[50%] object-cover' />
                    <span className='text-xl font-bold'>Colleges</span>
                </div>
                <div className='flex justify-center items-center gap-2 bg-yellow-300 rounded-md w-[100%] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_20px_2px] cursor-pointer'>
                    <Image src={"/placements.jpg"} width={50} height={50} alt='' className='rounded-[50%] object-cover' />
                    <span className='text-xl font-bold'>Placements</span>
                </div>
                <div className='flex justify-center items-center gap-2 bg-pink-300 rounded-md w-[100%] md:w-[220px] py-[15px] hover:shadow-[_0px_0px_20px_2px] cursor-pointer'>
                    <Image src={"/blogs.jpg"} width={50} height={50} alt='' className='rounded-[50%] object-cover' />
                    <span className='text-xl font-bold'>My Blogs</span>
                </div>
            </div>
        </div>
    )
}

export default PopularCategories