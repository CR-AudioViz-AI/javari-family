'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, BookOpen, Heart, Users, Calendar, MessageCircle,
  CheckCircle, ArrowRight, Star, Shield, Play, Sparkles,
  Apple, Moon, Stethoscope, GraduationCap
} from 'lucide-react';

const stages = [
  { id: 'expecting', name: 'Expecting', icon: Heart, color: 'from-pink-500 to-rose-600' },
  { id: 'newborn', name: 'Newborn', icon: Baby, color: 'from-blue-500 to-cyan-600' },
  { id: 'toddler', name: 'Toddler', icon: Sparkles, color: 'from-amber-500 to-orange-600' },
  { id: 'school', name: 'School Age', icon: GraduationCap, color: 'from-emerald-500 to-teal-600' },
];

const resources = [
  { icon: BookOpen, title: 'Expert Guides', desc: 'Age-appropriate parenting advice from pediatricians' },
  { icon: Calendar, title: 'Milestone Tracker', desc: 'Track development and celebrate achievements' },
  { icon: Stethoscope, title: 'Health Resources', desc: 'Symptom checker and when to see a doctor' },
  { icon: Users, title: 'Parent Community', desc: 'Connect with parents going through the same stages' },
];

const stats = [
  { value: '500K+', label: 'Active Parents' },
  { value: '10K+', label: 'Expert Articles' },
  { value: '50+', label: 'Pediatricians' },
  { value: '4.9/5', label: 'App Rating' },
];

const topics = [
  { name: 'Sleep Training', count: 245 },
  { name: 'Nutrition', count: 312 },
  { name: 'Development', count: 428 },
  { name: 'Behavior', count: 267 },
  { name: 'Education', count: 189 },
  { name: 'Health', count: 356 },
];

export default function FamilyPage() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Family</span>
                <span className="text-cyan-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#stages" className="text-gray-300 hover:text-white transition">By Stage</a>
              <a href="#resources" className="text-gray-300 hover:text-white transition">Resources</a>
              <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
              <a href="#start" className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Join Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>Expert-reviewed content</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Parenting Made<br/>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              A Little Easier
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Expert guidance, milestone tracking, and a supportive community 
            for every stage of your parenting journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#start" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#resources" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              Browse Resources
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stages */}
      <section id="stages" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">By Stage</h2>
            <p className="text-xl text-gray-400">Find resources for your child's age</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stages.map((stage, i) => (
              <motion.button
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedStage(stage.id)}
                className={`p-6 bg-white/5 border rounded-xl text-center transition-all hover:scale-105 ${
                  selectedStage === stage.id ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stage.color} mb-4`}>
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white">{stage.name}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-900/50 border border-white/10 rounded-xl text-center"
              >
                <resource.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-400">{resource.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Popular Topics</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {topics.map((topic, i) => (
              <motion.a
                key={i}
                href={`/topics/${topic.name.toLowerCase()}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/30 transition"
              >
                <span className="text-white font-medium">{topic.name}</span>
                <span className="text-gray-500 ml-2">{topic.count}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">Connect with parents and access expert resources</p>
          <a href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-900 font-semibold rounded-xl hover:bg-gray-100 transition">
            <Heart className="w-5 h-5" />
            Join Free Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Baby className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-semibold">Javari Family</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
