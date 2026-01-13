'use client'

import React, { useRef, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DemoBookingModal } from '@/components/onboarding-flow'

import HeroSection from './components/Hero'
import FounderStory from './components/FounderStory'
import ValuesSection from './components/ValuesSection'
import VisionSection from './components/VisionSection'

import Icon from '@/components/AppIcon'
import { Button } from '@/components/ui/button'

const Company: React.FC = () => {
    const scrollRefs = useRef<HTMLElement[]>([])
    const [isDemoOpen, setIsDemoOpen] = useState(false)

    const addToRefs = (el: HTMLElement | null) => {
        if (el && !scrollRefs.current.includes(el)) {
            scrollRefs.current.push(el)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <HeroSection />
            <FounderStory />
            <ValuesSection />
            <VisionSection />

            {/* ---------------- CTA SECTION ---------------- */}
            <div
                ref={addToRefs}
                className="mx-4 md:mx-8 lg:mx-12 my-20 bg-gradient-to-r from-[#40DDE9] via-[#47AEE8] to-[#5487EE] rounded-2xl p-8 md:p-12 text-center text-white"
            >
                <Icon
                    name="Calendar"
                    size={48}
                    color="white"
                    className="mx-auto mb-6"
                />

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to See LeadPulze in Action?
                </h3>

                <p className="text-base md:text-lg mb-10 opacity-95 max-w-2xl mx-auto">
                    Book a personalized demo and discover how LeadPulze can transform
                    your sales process.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        onClick={() => setIsDemoOpen(true)}
                        className="cta-animate px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold bg-white text-[#5487EE] rounded-full shadow-lg hover:shadow-xl hover:text-black"
                    >
                        Book a Demo
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="px-10 h-12 sm:h-14 text-base sm:text-lg font-semibold border-2 border-white text-white hover:bg-white/10 rounded-full bg-transparent"
                    >
                        See It in Action
                    </Button>
                </div>
            </div>

            <Footer />

            {/* ---------------- DEMO MODAL ---------------- */}
            <DemoBookingModal
                isOpen={isDemoOpen}
                onClose={() => setIsDemoOpen(false)}
            />
        </div>
    )
}

export default Company
