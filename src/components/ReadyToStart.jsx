import { Button } from "@heroui/react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const ReadyToStart = () => {
    return (
        <div className="bg-cyan-50">
            <div className="w-10/12 mx-auto p-5 ">
                <div
                    className=" h-[400px] text-white flex flex-col justify-between items-center gap-5
                    bg-[url('/assets/CTA.png')] bg-no-repeat bg-cover
                    bg-linear-to-b from-cyan-800 to-blue-900 bg-blend-overlay"
                >
                    <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
                        <h1 className="text-7xl">
                            Ready to Start Your Journey?
                        </h1>

                        <p className="text-2xl">
                            Join thousands of travelers who have discovered the world with us
                        </p>

                        <div className="flex gap-5">

                            <Link href={'/destination'}> <Button className="uppercase px-5 py-3 flex gap-3 items-center  cursor-pointer">
                                BOOK YOUR TRIP TODAY <FaArrowCircleRight />
                            </Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadyToStart;