import React, {useEffect} from 'react'
import Navbar from './Components/Navbar'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from '@inertiajs/react';
import Footer from './Components/Footer';
import { Typography } from '@material-tailwind/react';
import TestimonialCard from './Components/TestimonialCard';
import AOS from 'aos';

function HomeScreen() {
	
	useEffect(() => {
		AOS.init({ duration: 600 })
	  }, [])
	const testimonials = [ 
		{
			'id': '1',
			'title': 'Excellent website design',
			'name': 'Nakaayi Sarah',
			'content': 'Lehub designed a website for my business that exceeded my expectations. The process was smooth, and the final product was professional and user-friendly.',
		},
		{
			'id': '2',
			'title': 'Highly recommend their services',
			'name': 'Lutalo James',
			'content': 'The team at Lehub developed a mobile app for me, and I couldn’t be happier with the results. They were attentive to my needs and delivered on time.',
		},
		{
			'id': '3',
			'title': 'Impressive graphic designs',
			'name': 'Okello Janet',
			'content': 'Lehub created amazing graphics for my marketing campaign. Their attention to detail and creativity made a significant impact on my brand image.',
		},
		{
			'id': '4',
			'title': 'Professional and reliable',
			'name': 'Mutebi Peter',
			'content': 'Lehub revamped our company’s branding, and the results were outstanding. They truly understand how to create designs that resonate with the target audience.',
		},
		{
			'id': '5',
			'title': 'Great customer support',
			'name': 'Akankwasa Joan',
			'content': 'What stood out most about Lehub was their excellent customer service. They kept me updated at every step and ensured all my requirements were met.',
		},
	];

	return (
		<div>
			<Navbar />
			<section className="">
				<Splide options={{ autoplay: true, rewind: true, arrows: false }}>
					<SplideSlide>
						<div style={{ backgroundPosition: '50%', backgroundImage: "url('/images/web/hero1.jpg')", backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
						<div className='bg-black/60'>

						
							<div  className=" container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
								<div className="flex grid grid-cols-1 center flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
									<h2 data-aos="zoom-out-down" className='text-sm text-gray-50'>Create || Design || Develop</h2>
									<h1 className="text-5xl text-gray-50 font-bold leading-none sm:text-6xl">Lehub
									</h1>
									<p className="mt-6 mb-8 text-gray-50 text-lg sm:mb-12">Lehub specializes in creating mobile apps, stunning websites, and impactful graphics to help your business thrive.

									</p>
									<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
										<a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-primary text-lg text-white font-semibold rounded ">Get Started</a>
										<Link rel="noopener noreferrer" href="/aboutus" className="px-8 py-3 bg-primary text-white text-lg font-semibold border rounded ">About Us</Link>
									</div>
								</div>

							</div>
							</div>
						</div>

					</SplideSlide>
					{/* <SplideSlide>
						<div style={{ backgroundPosition: '50%', backgroundImage: "url('/images/web/graphics-background.jpg')", backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
							<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
								<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
									<h2 className='text-sm text'>Create || Design || Develop</h2>
									<h1 className="text-5xl font-bold leading-none sm:text-6xl">Graphics
									</h1>
									<p className="mt-6 mb-8 text-lg sm:mb-12">We create new technologies for your business thanks to our wonderful team of professionals

									</p>
									<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
										<a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-primary text-lg text-white font-semibold rounded ">Contact Us</a>
										<a rel="noopener noreferrer" href="#" className="px-8 py-3 bg-primary text-white text-lg font-semibold border rounded ">About Us</a>
									</div>
								</div>

							</div>
						</div>

					</SplideSlide> */}
				</Splide>

			</section>
			{/* Slogan Section*/}
			<div data-aos='fade-up' className='w-full justify-center align-content-center items-center mt-10'>


				<h3 className="w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
					About<span className="text-primary"> Us</span>
				</h3>
				<div className="max-w-xl mx-auto text-center py-10 md:py-10">
					{/* <div className="w-24 h-2 bg-blue-900 mb-4 mx-auto" data-aos='fade-down'></div>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6" data-aos='fade-right'>We Are Experts</h2> */}
					<p className="font-light text-gray-600 mb-6 leading-relaxed">
						{/* Welcome to Vialey Kankou Tours - Your Gateway to Memorable Experiences in Uganda! <br/> */}
						We Are Experts. <br />Our team of professionals concentrates on developing applications, websites, systems, graphics together all other IT services like digital marketing, branding and custom prints on items which help in giving an edge to your businesses.

					</p>
				</div>
			</div>
			{/* End Slogan Section*/}
			{/* Services */}
			<div>
				<h3 className="my-6 w-full text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
					Our<span className="text-primary"> Services</span>
				</h3>



			</div>
			{/*Mission Section*/}


			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-white p-12 md:p-24 flex justify-start items-center">
					<a href="" data-aos='fade-left'>
						<img src="/images/web/mobileapp.jpg" className="w-full max-w-md" />
					</a>
				</div>
				<div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
					<div className="max-w-md" data-aos='fade-right'>
						<div className="w-24 h-2 bg-secondary mb-4"></div>
						<h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Mobile Apps</h2>
						{/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
						<Typography>
							Custom-built Android and iOS applications tailored to your needs.
							{/* </p> */}
							{/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
						</Typography>
							<Link href="/mobile-app-development" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">View more</Link>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-white p-12 md:p-24 flex justify-end items-center">
					<a href="" data-aos='fade-right'>
						<img src="/images/web/website.jpg" className="w-full max-w-md" />
					</a>
				</div>
				<div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
					<div className="max-w-md" data-aos='fade-left'>
						<div className="w-24 h-2 bg-secondary mb-4"></div>
						<h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Websites</h2>
						{/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
						<Typography>
							Professional and responsive websites that drive engagement.
						</Typography>
						{/* </p> */}
						<Typography>
							<Link href="/website-design" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Learn more</Link>
						</Typography>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-white p-12 md:p-24 flex justify-start items-center">
					<a href="" data-aos='fade-left'>
						<img src="/images/web/graphics.jpg" className="w-full max-w-md" />
					</a>
				</div>
				<div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
					<div className="max-w-md" data-aos='fade-right'>
						<div className="w-24 h-2 bg-secondary mb-4"></div>
						<h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">Graphics Design, Printing and Branding</h2>
						{/* <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed"> */}
						<Typography>
							Creative designs for logos, flyers, banners, and more.
							<Link href="/graphics-design" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Am interested</Link>
							{/* </p> */}
							{/* <a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a> */}
						</Typography>
					</div>
				</div>
			</div>

			
			{/* <div className="grid grid-cols-1 md:grid-cols-2">
				<div className="bg-white p-12 md:p-24 flex justify-start items-center">
					<a href="" data-aos='fade-left'>
						<img src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?w=740&t=st=1682675522~exp=1682676122~hmac=665559ecfe817fb6aa7a1ad36deaa7aad08429d638eac050444c36764589e1d9" className="w-full max-w-md" />
					</a>
				</div>
				<div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
					<div className="max-w-md" data-aos='fade-right'>
						<div className="w-24 h-2 bg-secondary mb-4"></div>
						<h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">FunaTicket system</h2>
						<p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
						<Typography>
							Seamless airport pickups and drop-offs for your hassle-free travel experience. Arrive and depart with ease as our professional team ensures your comfort and convenience. Your journey begins or ends on a stress-free note with us.
							<Link href="/airportpickup" className="mt-5 inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Contact for Pickup</Link>
							</p>
							<a href="" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Book Custom Package</a>
						</Typography>
					</div>
				</div>
			</div> */}

			{/* End Mission Section*/}
			{/* End Services */}

			{/*Consultation  Section*/}
			<div className='w-full'>
				<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
					<div className="w-full lg:w-1/2">
						<div className="lg:max-w-lg" >
							<h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Why Choose Us?</h1>
							<p className="my-4 text-gray-600 dark:text-gray-300">
							Why Lehub?
							At Lehub, we prioritize creativity, efficiency, and your satisfaction. From concept to delivery, we ensure quality every step of the way.
							</p>
							<Link href="/consultation" className="inline-block border-2 border-primary font-light text-primary text-sm uppercase tracking-widest py-3 px-8 hover:bg-primary hover:text-white">Consult with us</Link>

						</div>
					</div>

					<div className="flex items-center justify-center w-full h-96 lg:w-1/2">
						<img className="object-cover w-full h-full max-w-2xl rounded-md" src="/images/web/phone.jpg" alt="glasses photo" />
					</div>
				</div>
			</div>

			{/*End consultation section*/}


			{/*Testimonials  Section*/}
			{testimonials && testimonials.length > 0 &&
				<div className="pt-6 max-w-xl mx-auto text-center" data-aos='fade-down'>
					<div className="w-24 h-2 bg-primary mb-4 mx-auto "></div>
					<h3 className=" text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-secondary ">
						Client's<span className="text-primary"> Testimonies</span>
					</h3>
				</div>
			}

			<Splide options={{
				type: 'loop',
				perPage: 3,
				perMove: 1,
				gap: '1rem',
				autoplay: true,
				interval: 3000,
			}} className='mx-12 hidden md:block mb-4'>
				{
					testimonials && testimonials.map((testimonial, index) => (
						<SplideSlide key={index} >
							<TestimonialCard testimonial={testimonial} />
						</SplideSlide>
					))
				}
			</Splide>

			<Splide options={{
				type: 'loop',
				perPage: 1,
				perMove: 1,
				gap: '1rem',
				autoplay: true,
				interval: 3000,
				arrows: false,
			}} className='mx-2 md:hidden'>
				{
					testimonials && testimonials.map((testimonial, index) => (
						<SplideSlide key={index} >
							<TestimonialCard testimonial={testimonial} />
						</SplideSlide>
					))
				}
			</Splide>

			{/*End testimonial section*/}

			<div className="container my-24 px-6 mx-auto">


				<section className="mb-32 text-gray-800">

					<div className="relative overflow-hidden h-96 bg-no-repeat bg-cover"
						style={{ backgroundPosition: '50%', backgroundImage: "url('/images/web/graphics-background.jpg')", backgroundAttachment: 'fixed', backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
					>
						<div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
							<div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
							<h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Contact Us</h2>
						</div>
					</div>
					<div className="container text-gray-800 px-4 md:px-12" style={{ marginTop: "-200px", background: 'hsla(0, 0%, 100%, 0.8)' }}>
						<div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6" style={{ backdropFilter: "blur(20px)" }}
						>
							<div className="flex flex-wrap" data-aos='zoom-in-left' >
								<div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
									<form>
										<div className="form-group mb-6">
											<input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
												placeholder="Name" />
										</div>
										<div className="form-group mb-6">
											<input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
												placeholder="Email address" />
										</div>
										<div className="form-group mb-6">
											<textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
										</div>
										<div className="form-group form-check text-center mb-6">
											<input type="checkbox"
												className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
												id="exampleCheck87" />
											<label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
												message</label>
										</div>
										<button type="submit" className="w-full px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
											Send
										</button>
									</form>
								</div>
								<div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
									<div className="flex flex-wrap">
										<a href='tel:+256765774111' className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
											<div className="flex items-start bg-white p-2 rounded bg-opacity-70">
												<div className="shrink-0">
													<div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
														<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
															role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
															<path fill="currentColor"
																d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
															</path>
														</svg>
													</div>
												</div>
												<div className="grow ml-6">
													<p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Call Us</p>
													<p className="font-light text-gray-600 text-sm md:text-base leading-relaxed">+256 765 974 111</p>
												</div>
											</div>
										</a>
										<a href='mailto:info@lehub.dev' className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6 ">
											<div className="flex items-start bg-white p-2 rounded bg-opacity-70">
												<div className="shrink-0">
													<div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
														<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
															<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
														</svg>

													</div>
												</div>
												<div className="grow ml-6">
													<p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed">Email</p>
													<p className="font-light text-gray-600 text-xs leading-relaxed">info@lehub.dev</p>
												</div>
											</div>
										</a>
										<button className="grow-0 mb-12 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
											<div className="flex align-start bg-white p-2 rounded bg-opacity-70">
												<div className="shrink-0">
													<div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
														<img className='object-fill' src='/images/web/facebook.png' />
														{/* <svg viewBox="0 0 24 24" fill="white" className="h-5 ">
                              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg> */}
													</div>
												</div>
												<div className="grow ml-6">
													<p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed text-left">Facebook</p>
													<p className="font-light text-gray-600 text-sm md:text-base leading-relaxed text-left">Lehub</p>
												</div>
											</div>
										</button>
										<button className="grow-0 mb-12 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
											<div className="flex align-start bg-white p-2 rounded bg-opacity-70">
												<div className="shrink-0">
													<div className="p-4 bg-primary rounded-md shadow-md w-14 h-14 flex items-center justify-center">
														<img className='w-full h-full object-fill' src='/images/web/instagram.png' />
														{/* <svg viewBox="0 0 30 30" fill="white" className="h-6 w-6">
                              <circle cx="15" cy="15" r="4" />
                              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg> */}
													</div>
												</div>
												<div className="grow ml-6">
													<p className="font-bold mb-1 text-gray-600 text-sm md:text-base leading-relaxed text-left">Instagram</p>
													<p className="font-light text-gray-600 text-sm md:text-base leading-relaxed text-left">Lehub</p>
												</div>
											</div>
										</button>

									</div>


								</div>
							</div>
						</div>
					</div>

				</section>


			</div>
			<Footer />
		</div>
	)
}

export default HomeScreen