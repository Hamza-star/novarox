import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div>
          <Image
            src='/images/testimonial/vector-smart.png'
            alt='logo'
            width={150}
            height={0}
            quality={100}
            className='w_f w-94! h-52! m-auto'
          />
          <div className='pt-16 pb-28'>
            <p className='font-medium md:text-xl text-base text-midnight_text dark:text-white text-center max-w-3xl mx-auto'>
              "Novaroxe transformed our digital presence. Their Meta and Google Ads strategies delivered a 4x return on our ad spend within the first three months. Their data-driven approach is truly game-changing."
            </p>
          </div>
          <div className='text-center'>
            <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
              Sarah Jenkins
            </strong>
            <p className='text-base text-gray dark:text-white/50 '>
              Marketing Director, TechFlow Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
