import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-700 flex items-center justify-center px-6">

            <div className="text-center text-white max-w-xl">

                {/* 404 number */}
                <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-3xl md:text-4xl font-bold">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-lg text-cyan-100">
                    Oops! The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="mt-8 px-8 py-3 bg-white text-cyan-700 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
                        ⬅ Back to Home
                    </button>
                </Link>

            </div>

        </div>
    )
}