import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,0.15),transparent_70%)]" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F0B90B]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl space-y-3 mx-auto px-2 relative">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-2">

                        <div className=" rounded-3xl md:rounded-none md:rounded-s-3xl p-4 md:p-8 relative">
                            <div className="absolute top-4 left-4 flex space-x-2">
                                <div className="w-3 h-3 bg-white/20 rounded-full" />
                                <div className="w-3 h-3 bg-white/20 rounded-full" />
                            </div>
                            <div className="absolute top-4 right-4">
                                <div className="w-3 h-3 bg-white/20 rounded-full" />
                            </div>
                            <h1 className="text-white text-xl md:text-4xl font-bold mt-8">
                                Step Into the Feenax Network <br />

                                <span className='gradient-text'>Revolutionizing Blockchain</span>  <br />

                                for a Decentralized Tomorrow
                            </h1>
                            <p className="text-[#F0B90B] mt-4">
                                Speed . Security . Scalability . Efficiency
                            </p>
                            <div className="mt-4  text-[42.7px] flex gap-4 items-center gradient-text"> $FNX
                                <span className="text-sm text-black/60">#HoldFNX</span>
                            </div>

                            <div className="flex space-x-4 mt-8">
                                <Link
                                    href="https://join.feenax.come" >
                                    <Button className="text-black gradient-btn ">
                                        BUY NOW
                                    </Button>
                                </Link>

                            </div>
                        </div>

                    </div>

                    <div className="relative ">
                        {/* <OrbitAnimation /> */}
                        <Image src="/images/img3.png" alt="Universe Chain" width={100} height={100} className="absolutex top-4x w-full animate-pulsex" />
                    </div>
                </div>
            </div>
            <div className="pt-20 max-w-7xl mx-auto px-4 hidden md:block">
            <Image src="/images/fbanner.png" alt="Feenax" width={100} height={100} className="absolutex top-4x w-full animate-pulsex" />
            </div>
            <div className="pt-20 max-w-7xl mx-auto px-4 md:hidden">
            <Image src="/images/fbanner.jpg" alt="Feenax" width={100} height={100} className="absolutex top-4x w-full animate-pulsex" />
            </div>
        </section>

    )
}

export default Hero