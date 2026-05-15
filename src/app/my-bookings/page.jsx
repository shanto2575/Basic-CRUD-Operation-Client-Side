import { BookingCancelAlert } from '@/components/BookingCancelAlert'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    // console.log(session)
    const user = session?.user;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const booking = await res.json()
    // console.log(booking)
    return (
        <div>
            <div className="max-w-5xl mx-auto p-6 space-y-8">
                <div className="bg-white shadow-xl rounded-2xl p-6 flex items-center gap-6 border">
                    <div>
                        <h2 className="text-2xl font-bold">{user?.name}</h2>
                        <p className="text-gray-500">{user?.email}</p>

                        <div className="mt-3 text-sm text-gray-600">
                            Total Bookings:
                            <span className="font-bold ml-2 text-blue-600">
                                {booking.length}
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

                    <div className="space-y-6">

                        {booking.map((booking) => (
                            <div
                                key={booking._id}
                                className="bg-white p-5 rounded-2xl shadow-lg border hover:shadow-xl transition"
                            >
                                <div className='flex gap-10'>
                                    <Image
                                        src={booking.imageUrl}
                                        alt={booking.destinationName}
                                        width={300}
                                        height={300}
                                    />
                                    <div className='space-y-4'>
                                        <h3 className="text-xl font-semibold text-blue-600">
                                            {booking.destinationName}
                                        </h3>

                                        <div className="mt-3 space-y-1 text-gray-600">
                                            <p>
                                                Departure Date: {new Date(booking.departureData).toLocaleDateString("en-GB", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                })}
                                            </p>
                                            <p>Address: {booking.country}</p>
                                            <p>Email: {booking.userEmail}</p>
                                            <p>Price: $ {booking.price}/person</p>
                                        </div>

                                        <BookingCancelAlert booking={booking} />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyBookingPage
