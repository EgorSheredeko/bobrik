"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Heart, Music, Moon, Star } from "lucide-react";

export default function MarcelineSite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] selection:bg-[#ff0033] selection:text-white overflow-x-hidden font-sans">
      {/* Прогресс-бар сверху */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#ff0033] origin-left z-50" style={{ scaleX }} />

      {/* Секция 1: Intro */}
      <section className="h-screen flex flex-col items-center justify-center relative p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#32000a] via-transparent to-transparent opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Music size={60} className="text-[#ff0033] drop-shadow-[0_0_15px_rgba(255,0,51,0.5)]" />
          </motion.div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic text-white">
            MARCE<span className="text-[#ff0033]">LINE</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 font-light tracking-[0.2em] uppercase">Vampire Queen Spirit</p>
        </motion.div>
        
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Листай вниз</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* Секция 2: Основное послание */}
      <section className="min-h-screen flex items-center justify-center p-8 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl border-l-[6px] border-[#ff0033] pl-8 md:pl-12 py-6 bg-white/5 backdrop-blur-sm rounded-r-2xl"
        >
          <h2 className="text-4xl font-bold mb-8 text-[#ff0033] flex items-center gap-3">
            Эй, Марси! <Heart size={32} className="fill-[#ff0033]" />
          </h2>
          <div className="space-y-6 text-2xl md:text-3xl leading-relaxed font-medium">
            <p>
              Хотели сказать тебе огромное <span className="text-white underline decoration-[#ff0033] underline-offset-8">спасибо</span> за то, что ты стала нашей опорой. 
            </p>
            <p className="italic text-gray-300">
              «Ты выручила нас с Роном в самый нужный момент, и мы этого никогда не забудем».
            </p>
            <p>
              С нас причитается — как только пыль уляжется, мы устроим тебе достойную «ответку». Ты настоящая королева!
            </p>
          </div>
          <motion.div className="mt-12 flex items-center gap-4 text-gray-400">
            <div className="h-[1px] w-12 bg-[#ff0033]" />
            <span className="uppercase tracking-widest text-sm text-[#ff0033]">Твои Биба и БОба</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Секция 3: Outro */}
      <section className="h-[60vh] flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5">
        <motion.div 
          whileInView={{ scale: [0.9, 1.1, 1], opacity: [0, 1, 0.8] }}
          className="text-center z-10"
        >
          <Moon size={48} className="mx-auto mb-6 text-yellow-100/80" />
          <h3 className="text-2xl font-bold uppercase tracking-[0.5em] mb-2">Everything Stays</h3>
          <p className="text-gray-600 italic">Right where you left it...</p>
        </motion.div>
        
        {/* Декоративные звезды на фоне */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#ff0033]/20"
            initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: Math.random() * 3 + 2 }}
          >
            <Star size={Math.random() * 20} fill="currentColor" />
          </motion.div>
        ))}
      </section>

      {/* Футер */}
      <footer className="py-8 text-center text-xs text-gray-700 uppercase tracking-widest">
        Made with blood (red) & soul for our Vampire Queen
      </footer>
    </div>
  );
}