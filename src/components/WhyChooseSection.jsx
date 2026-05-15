import React from "react";
import { ShieldCheck, Map, Headset } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />,
        title: "Safe & Secure",
        desc: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
        icon: <Map className="w-8 h-8 text-cyan-500" />,
        title: "Expert Guides",
        desc: "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
        icon: <Headset className="w-8 h-8 text-cyan-500" />,
        title: "24/7 Support",
        desc: "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
];

const WhyChooseSection = () => {
    return (
        <div className="bg-[#eaf7ff]">
            <section className="w-10/12 mx-auto  py-16 px-6 ">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Why Choose Wanderlust
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WhyChooseSection;