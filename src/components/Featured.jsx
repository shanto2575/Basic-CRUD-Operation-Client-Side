import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { GiArrowWings } from 'react-icons/gi'
import { SlCalender } from 'react-icons/sl'

const FeaturedPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destination = await res.json()
    // console.log(destination)
    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-center mt-12 mb-7'>
                <h1 className='text-3xl font-bold'>Featured Destinations</h1>
                <p>Handpicked travel experiences for the adventure seekers</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    destination.map(destination => <div key={destination._id}>
                        <div className='my-5 shadow-[0_0_25px_rgba(0,0,0,0.15)] p-5 rounded-2xl'>
                            <Image
                                src={destination.imageUrl}
                                width={400}
                                height={400}
                                alt={destination.destinationName}
                                className='w-full h-80'
                            />
                            <div>
                                <div className='flex gap-2 items-center my-2'>
                                    <FiMapPin /><p>{destination.country}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-xl font-semibold'>{destination.destinationName}</h2>
                                    <p className='text-xl font-semibold'>${destination.price}<span className='text-sm font-light'>/person</span></p>
                                </div>
                                <div className='flex gap-2 items-center my-2'>
                                    <SlCalender />
                                    <p className='text-xl font-semibold text-gray-400'>{destination.duration}</p>
                                </div>
                                <Link href={`/destination/${destination._id}`}>
                                    <button className={'text-2xl bg-white text-blue-400 font-semibold border-b-2 border-pink-500 flex items-center gap-2'}>BOOK NOW <GiArrowWings /> </button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FeaturedPage