import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Input,Textarea } from '@material-tailwind/react'
import { useForm } from '@inertiajs/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MobileAppDevelopmentScreen() {
  const { data, setData, processing, post, reset, errors } = useForm();
  
      const handleSubmit = e => {
          e.preventDefault();
          post('/contact-us', {
              preserveScroll: true, preserveState: true,
              onSuccess: () => {
          reset();
                  setData({})
                  toast.success('We have received you request, we shall contact you shortly')
              }
          });
      }
  return (
    <div>
      <Navbar />
      <div>
        <section className="p-6">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6  rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
              <div className="text-center">
                <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                  Mobile <span className="text-primary">Apps </span>
                </h3>
              </div>
              <p className="my-5">
              From user-friendly interfaces to robust functionality, we design and develop mobile applications that stand out.
              </p>
              <form onSubmit={handleSubmit} className="self-stretch ng-untouched ng-pristine ng-valid">
                <div>
                  <div className='my-2'>
                    <Input color="green" label='Name' value={data.name ?? ''} onChange={e => setData('name', e.target.value)}/>

                  </div>
                  <div className='my-2'>
                    <Input color="green" label='Email' value={data.email ?? ''} onChange={e => setData('email', e.target.value)}/>

                  </div>
                  <div className='my-2'>
                    <Input color="green" label='Phone' value={data.phone ?? ''} onChange={e => setData('phone', e.target.value)}/>

                  </div>
                  <div className='my-2'>
                    <Textarea color="green" label="Extra Details" value={data.details ?? ''} onChange={e => setData('details', e.target.value)}/>

                  </div>
                  <button type="submit" className="w-full py-2 font-semibold bg-primary text-white rounded ">Send Request</button>
                </div>
              </form>
            </div>
            <img src="/images/web/mobileapp.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
          </div>
        </section>
        <ToastContainer/>

      </div>
      <Footer />
    </div>
  )
}

export default MobileAppDevelopmentScreen