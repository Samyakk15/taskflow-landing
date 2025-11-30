'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Users, Clock, CheckSquare, BarChart3, Calendar, MessageSquare, FileText, Zap } from 'lucide-react'
import { useState } from 'react'

// Interactive Card Component with 3D Tilt Effect
function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
        {/* Background Gradient on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"
        />

        {/* Icon */}
        <motion.div
          style={{ transformStyle: "preserve-3d", translateZ: 50 }}
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}
        >
          <feature.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Visual Demo */}
        <motion.div
          style={{ transformStyle: "preserve-3d", translateZ: 30 }}
          className="mt-auto"
        >
          {feature.demo}
        </motion.div>

        {/* Shine Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ transform: "skewX(-20deg)" }}
        />
      </div>
    </motion.div>
  )
}

// Mini Chart Demo
function ChartDemo() {
  const data = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 45 },
    { day: 'Wed', value: 85 },
    { day: 'Thu', value: 55 },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${item.value}%` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-lg relative group/bar cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
              {item.value}%
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between mt-3 text-xs text-gray-500 font-medium">
        {data.map((item, i) => (
          <span key={i}>{item.day}</span>
        ))}
      </div>
    </div>
  )
}

// Task List Demo
function TaskListDemo() {
  const tasks = [
    { name: 'Design Homepage', progress: 75, color: 'from-orange-400 to-red-400' },
    { name: 'Write Documentation', progress: 40, color: 'from-blue-400 to-cyan-400' },
    { name: 'Team Meeting', progress: 90, color: 'from-green-400 to-emerald-400' },
  ]

  return (
    <div className="space-y-3">
      {tasks.map((task, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ x: 5 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 cursor-pointer hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">{task.name}</span>
            <span className="text-xs font-bold text-gray-600">{task.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${task.progress}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
              className={`h-full bg-gradient-to-r ${task.color} rounded-full`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Team Collaboration Demo
function CollaborationDemo() {
  const members = [
    { name: 'Sarah', color: 'from-blue-400 to-blue-600' },
    { name: 'Mike', color: 'from-purple-400 to-purple-600' },
    { name: 'Emma', color: 'from-pink-400 to-pink-600' },
    { name: 'John', color: 'from-green-400 to-green-600' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex -space-x-3">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.color} border-4 border-white flex items-center justify-center text-white font-bold text-sm shadow-lg cursor-pointer`}
          >
            {member.name[0]}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="bg-blue-50 rounded-xl p-3 border border-blue-100"
      >
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-semibold text-blue-900">Latest Update</span>
        </div>
        <p className="text-xs text-gray-600">"Great progress on the new feature! 🚀"</p>
        <span className="text-xs text-gray-400 mt-1 block">2 minutes ago</span>
      </motion.div>
    </div>
  )
}

// Timer Demo
function TimerDemo() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100">
      <div className="flex items-center justify-center mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative w-24 h-24"
        >
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          <motion.div
            className="absolute inset-0 rounded-full border-8 border-yellow-500"
            style={{
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
            }}
          />
        </motion.div>
      </div>
      <div className="text-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-3xl font-bold text-gray-900"
        >
          04:21
        </motion.div>
        <p className="text-sm text-gray-600 mt-1">Focus Session</p>
      </div>
    </div>
  )
}

// Calendar Demo
function CalendarDemo() {
  const days = Array.from({ length: 12 }, (_, i) => ({
    day: i + 1,
    hasEvent: [3, 7, 10].includes(i + 1)
  }))

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-gray-900">December 2024</span>
        <Calendar className="w-4 h-4 text-purple-600" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {days.map((day) => (
          <motion.div
            key={day.day}
            whileHover={{ scale: 1.1 }}
            className={`aspect-square rounded-lg flex items-center justify-center text-sm font-semibold cursor-pointer transition-all ${day.hasEvent
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
          >
            {day.day}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Document Demo
function DocumentDemo() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 border border-gray-200">
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 bg-white rounded-lg p-3 cursor-pointer hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Document {i}</p>
              <p className="text-xs text-gray-500">Updated 2h ago</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Seamless Collaboration",
      description: "Work together in real-time with your team. Share updates, assign tasks, and keep everyone on the same page.",
      gradient: "from-blue-500 to-cyan-500",
      demo: <CollaborationDemo />
    },
    {
      icon: BarChart3,
      title: "Time Management Tools",
      description: "Track time spent on tasks, analyze productivity patterns, and optimize your team's workflow with detailed insights.",
      gradient: "from-purple-500 to-pink-500",
      demo: <ChartDemo />
    },
    {
      icon: CheckSquare,
      title: "Advanced Task Tracking",
      description: "Monitor progress with visual task boards. Set priorities, deadlines, and track completion rates effortlessly.",
      gradient: "from-orange-500 to-red-500",
      demo: <TaskListDemo />
    },
    {
      icon: Clock,
      title: "Customizable Workspaces",
      description: "Create personalized dashboards tailored to your workflow. Focus sessions, pomodoro timers, and productivity zones.",
      gradient: "from-yellow-500 to-orange-500",
      demo: <TimerDemo />
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Intelligent calendar integration that syncs with your tasks. Never miss a deadline or important meeting again.",
      gradient: "from-purple-500 to-pink-500",
      demo: <CalendarDemo />
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Store, organize, and collaborate on documents. Version control, comments, and secure sharing built-in.",
      gradient: "from-green-500 to-emerald-500",
      demo: <DocumentDemo />
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-4"
          >
            Features
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Keep everything
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              in one place
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Forget complex project management tools. TaskFlow combines simplicity with powerful features to keep your team productive.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">and 50+ more features...</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            Explore All Features
            <Zap className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
