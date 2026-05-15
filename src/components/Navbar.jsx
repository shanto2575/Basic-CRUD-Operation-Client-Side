'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    // console.log(session)
    const user = session?.user;
    // if(!user)

    return (
        <div className='flex justify-between items-center shadow p-5'>
            <ul className='flex gap-5'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/destination'}>Destinations</NavLink></li>
                <li><NavLink href={'/my-bookings'}>My Bookings</NavLink></li>
                <li><NavLink href={'/add-destination'}>Add Destination</NavLink></li>
            </ul>
            <Link href={'/'}>
                <Image
                    src={'/assets/Logo.png'}
                    width={400}
                    height={400}
                    alt='logo'
                    className='text-sm w-40'
                />
            </Link>
            <ul className='flex items-center gap-5'>
                <li><NavLink href={'/profile'}> Profile</NavLink></li>
                <div>
                    {
                        user ? <div className='flex gap-3 items-center justify-center'>
                            <Avatar>
                                <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image}/>
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <Button variant='danger' className={'rounded '} onClick={async()=>await authClient.signOut()}>LogOut</Button>
                        </div> :
                            <div className='flex items-center gap-3'>
                                <li><NavLink href={'/login'}>Login</NavLink></li>
                                <li><NavLink href={'/signup'}>Sign Up</NavLink></li>
                            </div>
                    }
                </div>
            </ul>
        </div>
    )
}

export default Navbar
