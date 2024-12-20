import React from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function HostPro360Screen() {
    return (
        <div>
            <Navbar/>
            <div style={{ backgroundPosition: '50%', backgroundImage: "url('/images/web/tech-background.jpg')", backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex grid grid-cols-1 center flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        {/* <h2 className='text-sm text-gray-50'>Create || Design || Develop</h2> */}
                        <h1 className="text-5xl text-gray-50 font-bold leading-none sm:text-6xl">HostPro360
                        </h1>
                        <p className="mt-6 mb-8 text-gray-50 text-lg sm:mb-12">A system designed for restaurants and bars to help in the running of your business by monitoring and keeping records of all transactions like sells and purchases making processes more efficent resulting into an increase in revenue

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-primary text-lg text-white font-semibold rounded ">Download for Android (.apk)</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-primary text-white text-lg font-semibold border rounded ">Download for Windows (.exe)</a>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default HostPro360Screen