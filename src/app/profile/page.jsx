import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Image from 'next/image'

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    if (!user) {
        return (
            <div className="flex items-center justify-center h-[80vh] text-3xl font-bold">
                No User Found
            </div>
        )
    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">

            <div className="bg-white shadow-xl rounded-3xl p-8 w-[350px] text-center space-y-4">

                {/* Avatar */}
                <div className="flex justify-center">
                    <Image
                        src={user.image || "/avatar.png"}
                        alt={user.name}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-blue-500 shadow-md"
                    />
                </div>

                {/* Name */}
                <h1 className="text-2xl font-bold text-gray-800">
                    {user.name}
                </h1>

                {/* Email */}
                <p className="text-gray-500">{user.email}</p>

                {/* Divider */}
                <div className="border-t pt-4">
                    <p className="text-sm text-gray-400">Welcome to your profile {user.name} 🎉</p>
                </div>

            </div>

        </div>
    )
}

export default ProfilePage