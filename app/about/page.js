// pages/about.js
import Image from 'next/image';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <div className="min-h-screen  flex flex-col items-start justify-start py-8 w-full">
                <main className="w-full px-5 md:px-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-purple-950 mb-4 md:mb-6">
                        About ChaiCharm!
                    </h1>
                    <p className=" text-xl md:text-2xl text mb-10">
                        Bringing chai lovers and creators together.
                    </p>

                    {/* Mission Section */}
                    <section className="mb-12">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-md md:text-xl">
                            Our mission is to connect chai enthusiasts with creators, providing a platform for creators to be funded by their fans and followers.
                        </p>
                    </section>

                    {/* How It Works Section */}
                    <section className="mb-12">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-md md:text-xl">
                            Fans and followers can support their favorite chai creators by buying them a chai. This small gesture helps creators to continue doing what they love.
                        </p>
                    </section>

                    {/* Features Section */}
                    <section className="mb-12">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">Features</h2>
                        <ul className="list-disc list-inside text-md md:text-xl space-y-2">
                            <li>Simple and intuitive platform for chai lovers and creators.</li>
                            <li>Secure payment options for fans to support creators.</li>
                            <li>Customizable creator profiles to showcase their work.</li>
                            <li>Regular updates and new features based on user feedback.</li>
                        </ul>
                    </section>

                    {/* Funding Section */}
                    <section className="mb-12">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">Funding</h2>
                        <p className="text-md md:text-xl">
                            ChaiCharm relies on the generosity of fans and followers to support their favorite creators. Each chai bought is a step towards helping creators achieve their dreams.
                        </p>
                    </section>

                    {/* Team Section */}
                    <section>
                        <h2 className="text-xl md:text-3xl font-bold mb-4">Our Team</h2>
                        <p className="text-md md:text-xl mb-6">
                            We are a team of passionate chai lovers, developers, and designers dedicated to supporting the community and fostering creativity.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <div className="p-6 border rounded-xl shadow-lg w-full md:w-1/3 hover:bg-gray-50 focus:bg-gray-50 bg-purple-100">
                                <h3 className="text-2xl font-bold">Founder & CEO</h3>
                                <p className="mt-4"><span className='font-bold'>Mansi Singh</span> - Passionate chai lover and visionary behind ChaiCharm.</p>
                            </div>
                            <div className="p-6 border rounded-xl shadow-lg w-full md:w-1/3 hover:bg-gray-50 focus:bg-gray-50 bg-purple-100">
                                <h3 className="text-2xl font-bold">CTO</h3>
                                <p className="mt-4"><span className='font-bold'>Mansi Singh</span> - Experienced developer leading our tech team.</p>
                            </div>
                            <div className="p-6 border rounded-xl shadow-lg w-full md:w-1/3 hover:bg-gray-50 focus:bg-gray-50 bg-purple-100">
                                <h3 className="text-2xl font-bold">Design Lead</h3>
                                <p className="mt-4"><span className='font-bold'>Mansi Singh</span> - Creative designer shaping our platform's look and feel.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export const metadata={
    title:"About Us | ChaiCharm!",
    description:"Learn more about ChaiCharm, a crowdfunding platform for chai lovers and creators."
}