import { motion } from 'framer-motion';
import { BiLogoSteam } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaAmazon, FaSpotify, FaSlack } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Companies = () => {
    const companies = [
        { name: "Steam", logo: <BiLogoSteam /> },
        { name: "Google", logo: <FcGoogle /> },
        { name: "Apple", logo: <FaApple /> },
        { name: "Amazon", logo: <FaAmazon /> },
        { name: "Meta", logo: <FaMeta /> },
        { name: "Spotify", logo: <FaSpotify /> },
        { name: "Slack", logo: <FaSlack /> },
    ];

    // Duplicate the array for seamless loop
    const duplicatedCompanies = [...companies, ...companies];

    return (
        <div className="py-16 bg-gray-50 overflow-hidden mb-10 rounded-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl leading-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5] mb-1">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-sm text-gray-600">
                        Join thousands of companies that rely on our platform
                    </p>
                </motion.div>

                {/* Infinite Scrolling Container */}
                <div className="relative">
                    {/* Gradient Overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    {/* Scrolling Container */}
                    <div className="flex overflow-hidden py-1">
                        <motion.div
                            className="flex"
                            animate={{
                                x: [`0%`, `-50%`]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 60,
                                    ease: "linear",
                                },
                            }}
                            style={{
                                width: 'max-content'
                            }}
                        >
                            {duplicatedCompanies.map((company, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center justify-center mx-8 min-w-[200px] h-16 bg-white rounded-lg shadow-sm border border-gray-200"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <motion.span
                                            className="text-3xl"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {company.logo}
                                        </motion.span>
                                        <span className="text-lg font-semibold text-gray-700">
                                            {company.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Companies;