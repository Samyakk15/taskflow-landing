'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(true) // Changed to true as requested
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                            T
                        </div>
                        <span className="text-xl font-bold text-gray-900">
                            TaskFlow
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Features
                        </Link>
                        <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Pricing
                        </Link>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Sign In
                        </button>
                        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="p-4 space-y-4">
                            <Link href="#features" className="block text-sm font-medium text-gray-600">
                                Features
                            </Link>
                            <Link href="#testimonials" className="block text-sm font-medium text-gray-600">
                                Testimonials
                            </Link>
                            <Link href="#pricing" className="block text-sm font-medium text-gray-600">
                                Pricing
                            </Link>
                            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                                <button className="w-full py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg">
                                    Sign In
                                </button>
                                <button className="w-full py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
