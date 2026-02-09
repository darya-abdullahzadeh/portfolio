'use client';
import { Mail, MapPin, Phone, Send, Radio } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock)
    alert('Message received! Thank you for reaching out. This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Radio className="w-5 h-5 text-purple-300 animate-pulse" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Establish Contact
          </h2>
          <p className="text-purple-200/60 uppercase tracking-widest text-sm">Let's build something stellar together</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Ready to launch your next project into orbit? I'm always excited to discuss new opportunities, 
              collaborations, and innovative ideas. Whether you have a question or just want to connect, 
              feel free to send a transmission my way!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-xl border border-purple-400/30 group-hover:border-purple-400/60 transition-all group-hover:scale-110">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-1 text-lg">Email Transmission</h3>
                  <a href="mailto:abdullahzadeh.darya@gmail.com" className="text-purple-300/80 hover:text-purple-300 transition-colors">
                    abdullahzadeh.darya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-pink-500/30 to-pink-600/30 rounded-xl border border-pink-400/30 group-hover:border-pink-400/60 transition-all group-hover:scale-110">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-1 text-lg">Direct Line</h3>
                  <p className="text-purple-300/80">+1 (703) 895-1483</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl border border-blue-400/30 group-hover:border-blue-400/60 transition-all group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-1 text-lg">Home Base</h3>
                  <p className="text-purple-300/80">Manassas, VA</p>
                  <p className="text-purple-300/60 text-sm">Available for remote missions worldwide</p>
                </div>
              </div>
            </div>

          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all">
            <div className="mb-6">
              <label htmlFor="name" className="block text-white mb-2 text-sm uppercase tracking-wider">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2 text-sm uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2 text-sm uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none transition-all"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 text-white rounded-lg transition-all backdrop-blur-sm border border-purple-400/50 hover:border-purple-400/70 flex items-center justify-center gap-2 group hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Send Transmission</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}