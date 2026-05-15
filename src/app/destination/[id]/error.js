'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white">

            <div className="text-center space-y-6">

                <h1 className="text-7xl font-bold">Oops 😢</h1>

                <h2 className="text-2xl font-semibold">
                    Something went wrong!
                </h2>

                <p className="opacity-80">
                    We are already fixing the problem.
                </p>

                <div className="flex gap-4 justify-center">

                    {/* Retry button */}
                    <button
                        onClick={() => reset()}
                        className="bg-white text-cyan-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Try Again
                    </button>

                    {/* Go home */}
                    <Link href="/">
                        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-cyan-600 transition">
                            Go Home
                        </button>
                    </Link>

                </div>
            </div>

        </div>
    )
}