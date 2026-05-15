'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import { DateField, Label } from "@heroui/react";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa6';


const BookingCard = ({ destination }) => {
    const [departureData, setdepartureData] = useState(null)
    const { imageUrl, destinationName, country, price } = destination;
    // console.log(destination)
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    // console.log(session)
    const user = session?.user;
    // console.log(user)

    const handleBooking = async () => {
        const booking = {
            userName: user?.name,
            userId: user?.id,
            userImage: user?.image,
            userEmail: user?.email,
            destinationName,
            imageUrl,
            country,
            price,
            departureData: new Date(departureData)
        }
        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(booking)
        })
        const data = await res.json()
        // console.log(data,'affer data')
        if (data) {
            toast.success('Booking Successfull')
        }
    }
    return (
        <div>
            <Card className='rounded w-full mt-10'>
                <p className='text-gray-400'>Starting From</p>
                <h1 className='text-3xl font-bold'>${price}</h1>
                <p className='text-gray-400'>Per Person</p>
                <DateField onChange={setdepartureData} className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBooking} className={'rounded bg-cyan-600 w-full'}>Book Now</Button>
                <ul>
                    <li className='flex gap-2 items-center text-sm text-gray-500 '> <FaCheck className='text-green-600 ' />Free cancellation up to 7 days</li>
                    <li className='flex gap-2 items-center text-sm text-gray-500 '> <FaCheck className='text-green-600 ' />Travel insurance included</li>
                    <li className='flex gap-2 items-center text-sm text-gray-500 '> <FaCheck className='text-green-600 ' />24/7 customer support</li>
                </ul>
            </Card>
        </div>
    )
}

export default BookingCard
