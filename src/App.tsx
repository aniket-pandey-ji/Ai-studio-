import { useState, useEffect } from 'react';
import { 
  Terminal, 
  Clock, 
  Wrench, 
  LayoutGrid, 
  Image as ImageIcon, 
  BarChart3, 
  FileText, 
  Settings, 
  Key, 
  Mic, 
  Video, 
  Volume2, 
  Brain, 
  Zap, 
  Clapperboard, 
  Sparkles, 
  Map, 
  Maximize, 
  Stars,
  Search,
  Plus,
  ChevronRight,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sidebarItems = [
  { icon: Terminal, label: 'Playground', id: 'playground' },
  { icon: Clock, label: 'History', id: 'history' },
  { icon: Wrench, label: 'Build', id: 'build' },
  { icon: LayoutGrid, label: 'Apps', id: 'apps' },
  { icon: ImageIcon, label: 'Gallery', id: 'gallery' },
  { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
  { icon: FileText, label: 'Documentation', id: 'docs' },
  { icon: Settings, label: 'Settings', id: 'settings' },
  { icon: Key, label: 'API Key', id: 'api' },
];

const featureCards = [
  { title: 'Convert text to speech', description: 'Natural sounding voices in 30+ languages.', icon: '🎙️', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { title: 'Analyze video content', description: 'Understand scenes and objects in motion.', icon: '🎬', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { title: 'Transcribe audio', description: 'High accuracy speech-to-text processing.', icon: '✍️', color: 'text-green-600', bgColor: 'bg-green-50' },
  { title: 'High thinking', description: 'Enable chain-of-thought for complex logic.', icon: '🧠', color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { title: 'Low-latency', description: 'Real-time response for interactive apps.', icon: '⚡', color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { title: 'Analyze images', description: 'Identify labels and extract text.', icon: '🖼️', color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  { title: 'Generate video', description: 'Create short cinematic clips from text.', icon: '🎥', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { title: 'Maps data', description: 'Integrate Google Maps spatial data.', icon: '📍', color: 'text-cyan-600', bgColor: 'bg-cyan-50' },
];

const chips = [
  "Build a travel app",
  "Summarize long videos",
  "Generate high-res portraits",
  "Real-time voice agent"
];

export default function App() {
  const [activeTab, setActiveTab] = useState('playground');
  const [prompt, setPrompt] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] selection:bg-blue-100 selection:text-blue-700">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 80 }}
        className="fixed left-0 top-0 bottom-0 z-50 bg-white border-r border-[#e3e3e3] flex flex-col group overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <motion.span 
            animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
            className="font-display font-semibold text-lg tracking-tight text-gray-900 whitespace-nowrap"
          >
            Gemini Studio
          </motion.span>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {isSidebarOpen && (
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3 mb-2 mt-4">Menu</div>
          )}
          {sidebarItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative
                ${activeTab === item.id 
                  ? 'bg-blue-50 text-blue-700 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
              <item.icon className={`w-5 h-5 shrink-0 transition-colors ${activeTab === item.id ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-600'}`} />
              <motion.span 
                animate={{ opacity: isSidebarOpen ? 1 : 0, x: isSidebarOpen ? 0 : -10 }}
                className="whitespace-nowrap"
              >
                {item.label}
              </motion.span>
              {activeTab === item.id && !isSidebarOpen && (
                <div className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="px-4 py-6 border-t border-[#e3e3e3] space-y-1">
          <motion.div animate={{ opacity: isSidebarOpen ? 1 : 0 }}>
            {sidebarItems.slice(6, 8).map((item) => (
              <a key={item.id} href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-100 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2 text-sm text-gray-500 font-mono overflow-hidden text-ellipsis whitespace-nowrap">
              API Key: sk-gem...
            </div>
          </motion.div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full mt-4 flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 text-gray-400 transition-colors"
          >
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main 
        className="flex-1 transition-all duration-300 min-h-screen relative"
        style={{ marginLeft: isSidebarOpen ? 260 : 80 }}
      >
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-8 pt-20 pb-20 relative">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-100">
              <Sparkle className="w-3 h-3" />
              <span>Next Generation AI</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 relative py-1">
              Build your ideas with Gemini
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                  opacity: [0.3, 0.6, 0.3] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 text-blue-400"
              >
                <Sparkle className="w-8 h-8 opacity-40" />
              </motion.div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 0],
                  opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-10 -left-12 text-purple-400"
              >
                <Sparkle className="w-6 h-6 opacity-30" />
              </motion.div>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Supercharge your workflow with state-of-the-art AI multimodal capabilities.
            </p>

            {/* Input Area */}
            <div className="max-w-2xl mx-auto mb-8 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-white rounded-2xl p-2 flex items-center gap-2 premium-shadow border border-gray-100 transition-all duration-300 group-hover:border-blue-100">
                <div className="pl-4 text-blue-500">
                  <Zap className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe an app and let Gemini do the rest"
                  className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder:text-gray-400 text-lg py-3 outline-none"
                />
                <button className="bg-black text-white rounded-xl px-6 py-2.5 font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group/btn">
                  Generate
                </button>
              </div>
            </div>

            {/* Chips & Feeling Lucky */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {chips.map((chip, i) => (
                <button 
                  key={i}
                  className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm hover:border-blue-400 hover:text-blue-600 transition-all cursor-pointer hover:shadow-md active:scale-95"
                >
                  {chip}
                </button>
              ))}
              <button 
                className="px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-all flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                I'm feeling lucky
              </button>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className={`w-10 h-10 rounded-xl ${card.bgColor} ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-lg shadow-sm`}>
                  {card.icon}
                </div>
                <div className="font-semibold text-[13px] mb-1 text-gray-900">{card.title}</div>
                <p className="text-[11px] text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <footer className="mt-20 text-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
            Powered by Gemini 1.5 Pro • Ultra-clean developer environment
          </footer>
        </div>

        {/* Floating Gradient Circles */}
        <div className="fixed top-1/4 -right-20 w-80 h-80 bg-blue-400 opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-1/4 -left-20 w-60 h-60 bg-purple-400 opacity-10 blur-[100px] rounded-full pointer-events-none" />
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
      `}</style>
    </div>
  );
}
