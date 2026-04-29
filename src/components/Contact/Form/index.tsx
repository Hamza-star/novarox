'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialist: '',
    date: '',
    time: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Appointment requested successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          specialist: '',
          date: '',
          time: '',
        });
      } else {
        toast.error('Failed to request appointment.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className='dark:bg-darkmode md:pb-24 pb-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 grid-cols-1 gap-8'>
            <div className='col-span-6'>
              <h2 className='max-w-72 text-[40px] leading-tight font-bold mb-9 text-midnight_text dark:text-white'>
                Get Online Consultation
              </h2>
              <form onSubmit={handleSubmit} className='flex flex-wrap w-full m-auto justify-between'>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='firstName'
                      className='pb-3 inline-block text-base'>
                      First Name*
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className='w-full text-base px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                      required
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='lastName'
                      className='pb-3 inline-block text-base'>
                      Last Name*
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      type='text'
                      required
                    />
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='email'
                      className='pb-3 inline-block text-base'>
                      Email address*
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type='email'
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0'
                      required
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='specialist'
                      className='pb-3 inline-block text-base'>
                      Service Type*
                    </label>
                    <select 
                      name="specialist"
                      value={formData.specialist}
                      onChange={handleChange}
                      required
                      className='w-full text-base px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-darkmode border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'>
                      <option value=''>Choose a service</option>
                      <option value='Meta Ads'>Meta Ads (FB & IG)</option>
                      <option value='Google Ads'>Google Ads (Search/Display/YT)</option>
                      <option value='UI/UX Design'>UI/UX Design (Web & Mobile)</option>
                      <option value='Graphic Design'>Graphic Designing</option>
                      <option value='Email Marketing'>Email Marketing</option>
                      <option value='Social Media'>Social Media Management</option>
                      <option value='Analytics'>Analytics & Tracking</option>
                    </select>
                  </div>
                </div>
                <div className='sm:flex gap-3 w-full'>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='date'
                      className='pb-3 inline-block text-base'>
                      Date*
                    </label>
                    <input
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className='w-full text-base px-4 rounded-lg  py-2.5 outline-hidden dark:text-white dark:bg-darkmode border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'
                      type='date'
                      required
                    />
                  </div>
                  <div className='mx-0 my-2.5 flex-1'>
                    <label
                      htmlFor='time'
                      className='pb-3 inline-block text-base'>
                      Time*
                    </label>
                    <input
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className='w-full text-base px-4 rounded-lg py-2.5 border-border outline-hidden dark:text-white dark:bg-darkmode border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0'
                      type='time'
                      required
                    />
                  </div>
                </div>
                <div className='mx-0 my-2.5 w-full'>
                  <button
                    disabled={loading}
                    className='bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 disabled:opacity-50'
                    type='submit'>
                    {loading ? 'Processing...' : 'Make an appointment'}
                  </button>
                </div>
              </form>
            </div>
            <div className='col-span-6'>
              <Image
                src='/images/contact-page/contact.jpg'
                alt='Contact'
                width={1300}
                height={0}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className='bg-no-repeat bg-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
