import React from 'react'
import { count } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Counter = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section className="bg-black py-20">
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='glass-card p-12 flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-12'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-4 text-center'
              data-aos='fade-up'
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 border border-primary/20">
                <Icon icon={item.icon} width="28" />
              </div>
              <span className='text-5xl md:text-6xl font-black text-white tracking-tighter'>
                {item.value}
              </span>
              <p className='text-sm font-bold text-gray-500 uppercase tracking-widest'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
