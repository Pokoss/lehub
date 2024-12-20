import { Button } from '@material-tailwind/react'
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function HostingPlanScreen() {
  return (
    <div>
      <Navbar/>
            <div className='container mx-auto flex flex-wrap  max-w-full'>
        
                <div className="container px-4 mt-10 mx-auto">
                    <div className="max-w-3xl mx-auto mb-18 text-center">
                        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-orange-900 text-orange-100 rounded-full">OUR USER PLANS</span>
                        <h1 className="font-heading text-1xl xs:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            <span>We offer a hosting plan that can run your system and applications. Our plan includes PHP, Python,Java,Node, Ruby, Wordpress site and all other famous languges</span>
                            
                            
                        </h1>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <div className="relative max-w-sm lg:max-w-none mx-auto bg-white rounded-6xl">
                                    <div className="pt-2 px-2">
                                        <div className="relative pt-12 pb-10 px-6 h-52 rounded-6xl bg-purple-50 overflow-hidden">
                                            <img className="absolute bottom-0 left-0 w-full" src="saturn-assets/images/pricing/wave-bg1.svg" alt="" />
                                            <div className="relative text-center">
                                                <span className="inline-block py-1.5 px-5 mb-6 font-semibold text-pink-500 bg-pink-200 rounded-full">Bronze</span>
                                                <span className="block text-3xl font-bold">UGX 250,000</span>
                                                <span className="block text-sm font-medium">For 1 year</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-8 mb-7 relative">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
                                            <div className="w-full border-b-8 border-dotted border-orange-50"></div>
                                        </div>
                                        <div className="absolute top-0 left-0 transform -translate-x-1/2 w-8 h-8 bg-orange-50 rounded-full"></div>
                                        <div className="absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 bg-orange-50 rounded-full"></div>
                                    </div>
                                    <div className="px-6 pb-12">
                                        <ul className="mb-12">
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/green-check.svg" alt="" />
                                                <span className="ml-3 text-gray-900">A domain</span>
                                            </li>
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/green-check.svg" alt="" />
                                                <span className="ml-3 text-gray-900">20gb of storage</span>
                                            </li>
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/red-check.svg" alt="" />
                                                <span className="ml-3 text-gray-900">10 free email addresses</span>
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                        <Button color='yellow' >Contact Us</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
                                <div className="relative max-w-sm lg:max-w-none mx-auto bg-orange-700 rounded-6xl">
                                    <div className="pt-2 px-2">
                                        <div className="relative pt-12 pb-10 px-6 h-52 rounded-6xl bg-orange-900 overflow-hidden">
                                            <img className="absolute bottom-0 left-0 w-full" src="saturn-assets/images/pricing/wave-bg2.svg" alt="" />
                                            <div className="relative text-center">
                                                <span className="inline-block py-1.5 px-5 mb-6 font-semibold text-white bg-orange-700 rounded-full">Sliver</span>
                                                <span className="block text-3xl font-bold text-white">UGX 350,000</span>
                                                <span className="block text-sm font-medium text-white">For 3 Months</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-8 mb-7 relative">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
                                            <div className="w-full border-b-8 border-dotted border-orange-50"></div>
                                        </div>
                                        <div className="absolute top-0 left-0 transform -translate-x-1/2 w-8 h-8 bg-orange-50 rounded-full"></div>
                                        <div className="absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 bg-orange-50 rounded-full"></div>
                                    </div>
                                    <div className="px-6 pb-12">
                                        <ul className="mb-12">
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/orange-check.svg" alt="" />
                                                <span className="ml-3 text-gray-50">1 Free domain</span>
                                            </li>
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/orange-check.svg" alt="" />
                                                <span className="ml-3 text-gray-50">40gb of storage</span>
                                            </li>
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/orange-check.svg" alt="" />
                                                <span className="ml-3 text-gray-50">50 free email addresses</span>
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                            
                                        <Button color='yellow' >Contact Us</Button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-4">
                                <div className="relative max-w-sm lg:max-w-none mx-auto bg-white rounded-6xl">
                                    <div className="pt-2 px-2">
                                        <div className="relative pt-12 pb-10 px-6 h-52 rounded-6xl bg-purple-50 overflow-hidden">
                                            <img className="absolute bottom-0 left-0 w-full" src="saturn-assets/images/pricing/wave-bg1.svg" alt="" />
                                            <div className="relative text-center">
                                                <span className="inline-block py-1.5 px-5 mb-6 font-semibold text-gray-700 bg-yellow-800 rounded-full">Gold</span>
                                                <span className="block text-3xl font-bold">UGX 600,000</span>
                                                <span className="block text-sm font-medium">For 1 year</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-8 mb-7 relative">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
                                            <div className="w-full border-b-8 border-dotted border-orange-50"></div>
                                        </div>
                                        <div className="absolute top-0 left-0 transform -translate-x-1/2 w-8 h-8 bg-orange-50 rounded-full"></div>
                                        <div className="absolute top-0 right-0 transform translate-x-1/2 w-8 h-8 bg-orange-50 rounded-full"></div>
                                    </div>
                                    <div className="px-6 pb-12">
                                    <ul className="mb-12">
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/green-check.svg" alt="" />
                                                <span className="ml-3 text-gray-900">2 free domain</span>
                                            </li>
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/green-check.svg" alt="" />
                                                <span className="ml-3 text-gray-900">Unlimited email addresses</span>
                                            </li>
                                            <li className="flex mb-5 items-center">
                                                <img src="saturn-assets/images/pricing/red-check.svg" alt="" />
                                                <span className="ml-3 text-gray-900">Unlimited storage</span>
                                            </li>
                                            
                                        </ul>
                                        <div className="text-center">
                                        <Button color='yellow' >Contact Us</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

        </div>
       <Footer/>
       
    </div>
  )
}

export default HostingPlanScreen