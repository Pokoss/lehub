import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Textarea,Input } from '@material-tailwind/react'

function WebDesignScreen() {
  return (
    <div>
      <Navbar/>
      <section className="p-6">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                  Website<span className="text-primary"> Design</span>
                </h3>
              </div>
              <p className="my-5">
              Whether it’s a business website, an e-commerce platform, or a personal portfolio, we create sites that are visually appealing and fully responsive.
              </p>
              <form className="self-stretch ng-untouched ng-pristine ng-valid">
                <div>
                  <div className='my-2'>
                    <Input color="green" label='Name' />

                  </div>
                  <div className='my-2'>
                    <Input color="green" label='Email' />

                  </div>
                  <div className='my-2'>
                    <Input color="green" label='Phone' />

                  </div>
                  <div className='my-2'>
                    <Textarea color="green" label="Extra Details" />

                  </div>
                  <button type="submit" className="w-full py-2 font-semibold bg-primary text-white rounded ">Send Request</button>
                </div>
              </form>
            </div>
            <img src="/images/web/website.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
          </div>
        </section>
      <Footer/>
      </div>
  )
}

export default WebDesignScreen