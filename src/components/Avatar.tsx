import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Avatar() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-12deg', '12deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top)  / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative w-36 h-36 md:w-48 md:h-48 cursor-pointer select-none"
    >
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-500 blur-xl opacity-40 scale-110" />
      {/* Border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 p-[3px]">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-800">
          {/* Reemplazá /avatar.jpg con tu foto */}
          <img
            src="/avatar.jpg"
            alt="Jerónimo Parra"
            className="w-full h-full object-cover"
            onError={e => {
              // Placeholder si no hay foto aún
              const el = e.currentTarget
              el.style.display = 'none'
              el.parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-amber-500/20">
                  <span class="text-5xl font-bold text-yellow-400 font-['Space_Grotesk']">JP</span>
                </div>`
            }}
          />
        </div>
      </div>
      {/* Floating badge */}
      <motion.div
        className="absolute -bottom-2 -right-2 bg-yellow-400 text-black text-xs font-black px-2.5 py-1 rounded-full shadow-lg"
        style={{ translateZ: 20 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        Dev 💻
      </motion.div>
    </motion.div>
  )
}
