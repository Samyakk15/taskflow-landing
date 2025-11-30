'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Calendar, Users, Zap, BarChart3 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-200 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">Now in Public Beta</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Think, plan, and track
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                all in one place
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Efficiently manage your tasks and boost productivity with TaskFlow's intelligent workflow system.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get free demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300">
                Watch video
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">10,000+</span> teams already using TaskFlow
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Sticky Note Card */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: -3, y: -10 }}
              className="absolute top-10 left-0 w-64 h-64 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl shadow-2xl p-6 transform rotate-[-6deg] cursor-pointer"
            >
              <div className="absolute top-4 left-4 w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
              <div className="mt-8 font-handwriting text-gray-800 text-lg leading-relaxed">
                Take notes to keep track of crucial details, and accomplish more tasks with ease.
              </div>
            </motion.div>

            {/* Task Checklist Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="absolute bottom-20 left-16 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Today's tasks</h3>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg cursor-pointer"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New ideas for campaign</p>
                    <p className="text-xs text-gray-500">Sep 16</p>
                  </div>
                  <div className="text-xs font-semibold text-orange-600">60%</div>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"></div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-lg cursor-pointer"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Design PPT #4</p>
                    <p className="text-xs text-gray-500">Sep 16</p>
                  </div>
                  <div className="text-xs font-semibold text-green-600">17%</div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Reminder Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, rotate: 3, y: -10 }}
              className="absolute top-20 right-0 w-56 bg-white rounded-2xl shadow-2xl p-5 transform rotate-[6deg] cursor-pointer border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-center mb-2">Reminders</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs">Today's Meeting</span>
                </div>
                <div className="text-xs text-gray-400">Call marketing team</div>
                <div className="flex items-center gap-2 text-xs text-blue-600">
                  <Clock className="w-3 h-3" />
                  <span>13:00 - 13:46</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Icon Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 180 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center cursor-pointer border border-gray-100"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-md"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-md"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-md"></div>
                <div className="w-4 h-4 bg-gray-800 rounded-md"></div>
              </div>
            </motion.div>

            {/* Integration Icons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-10 right-10 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
            >
              <p className="text-xs font-semibold text-gray-500 mb-3">100+ Integrations</p>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  M
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  S
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  C
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}
