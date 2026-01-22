"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Music, Heart, Ghost, Star } from "lucide-react";

export default function MarcelineSite() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Настройки параллакса для разных слоев
  const yText = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [1, 1, 1, 0]);

  return (
    <div ref={containerRef} className="bg-[#050505] text-[#d1d1d1] selection:bg-[#ff0033]">
      
      {/* 1. ГИГАНТСКИЙ ЗАГОЛОВОК (150% высоты экрана) */}
      <section className="relative h-[150vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yFast, opacity }} className="absolute z-0">
          <h1 className="text-[40vw] font-black text-[#1a1a1a] leading-none uppercase select-none">
            VAMP
          </h1>
        </motion.div>
        
        <div className="z-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl md:text-9xl font-black italic text-white tracking-tighter">
              MARCE<span className="text-[#ff0033]">LINE</span>
            </h2>
            <p className="text-[#ff0033] tracking-[1em] uppercase text-sm mt-4">Scroll to bleed</p>
          </motion.div>
        </div>
      </section>

      {/* 2. ОГРОМНЫЙ ТЕКСТ (Растянут на несколько экранов) */}
      <section className="relative px-6">
        
        {/* Фраза 1 */}
        <div className="h-screen flex items-center justify-start">
          <motion.h3 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-[8vw] font-bold leading-none text-white max-w-4xl"
          >
            ЭЙ, ПОСЛУШАЙ. <br/> ТЫ ПРОСТО <br/> 
            <span className="text-[#ff0033]">ЛУЧШАЯ.</span>
          </motion.h3>
        </div>

        {/* Фраза 2 (Акцент на благодарности) */}
        <div className="h-screen flex items-center justify-end">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-right max-w-5xl"
          >
            <p className="text-[5vw] leading-tight italic">
              «Спасибо, что выручаешь <br/>
              <span className="bg-[#ff0033] text-white px-4 not-italic font-black uppercase">меня и Рона</span> <br/>
              прямо сейчас».
            </p>
          </motion.div>
        </div>

        {/* Фраза 3 (Обещание) */}
        <div className="h-[120vh] flex flex-col justify-center items-center">
          <motion.p 
            whileInView={{ scale: [0.8, 1.2, 1] }}
            className="text-[6vw] font-light text-center leading-none tracking-tighter"
          >
            МЫ ОБЯЗАТЕЛЬНО <br/> ОТПЛАТИМ ТЕБЕ <br/> 
            <span className="font-black text-white underline decoration-[#ff0033]">ТЕМ ЖЕ.</span>
          </motion.p>
          
          <motion.div 
            className="mt-20 opacity-20"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Ghost size={100} />
          </motion.div>
        </div>
      </section>

      {/* 3. ФИНАЛ (Огромное сердце) */}
      <section className="h-screen flex flex-col items-center justify-center bg-[#ff0033] text-white">
        <motion.div
          whileInView={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Heart size={200} fill="currentColor" />
        </motion.div>
        <h2 className="text-4xl font-black uppercase mt-10 tracking-widest">Твои друзья навсегда</h2>
        <p className="mt-4 font-mono opacity-80">Stay cool, Marcy.</p>
      </section>

      {/* Декоративные элементы по бокам (плавающие) */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <Star className="absolute top-10 left-10 text-[#ff0033] opacity-30" size={40} />
        <Music className="absolute bottom-20 right-10 text-white opacity-20" size={60} />
      </div>

    </div>
  );
}