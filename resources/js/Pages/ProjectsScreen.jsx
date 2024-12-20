import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Packages from './Components/Packages'
import { Link } from '@inertiajs/react'

function ProjectsScreen() {
  const projects = [
    {
      'id': '1',
      'title': 'AVHA UGANDA',
      'image':'/images/project/avha.jpg',
      'duration': '3 days',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '2',
      'title': 'VIALEY KANKOU TOURS',
      'image':'/images/project/vialey-logo-01.png',
      'duration': '3 days',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'PRIMAVERA',
      'image':'/images/project/primavera4-01.jpg',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'SPILLNATION',
      'image':'/images/project/spill-logo.png',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'FUNATICKET SYSTEM',
      'image':'/images/project/funaticket-01.png',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'HOSTPRO360 SYSTEM',
      'image':'/images/project/hostprologodark-01.jpg',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'QRAFT',
      'image':'/images/project/qraft.png',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    {
      'id': '3',
      'title': 'BIST101',
      'image':'/images/project/Bist.jpg',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ratione reprehenderit maxime illo dolorem recusandae voluptas soluta hic sapiente reiciendis neque natus doloremque molestias, laudantium itaque harum ab libero numquam.',
      'duration': '3 days',
      'activities': ['3 Hotels', 'Game drive', 'Gorilla tracking'],
      "addons": ['Free photography', 'Free meals', 'Free tour guide']
    },
    
  ]
  return (
    <div>
      <Navbar/>
      {/*Packages Section Section*/}
      <div >
        <div className="max-w-xl mx-auto text-center pt-10 md:py-10" data-aos='fade-down'>
          <div className="w-24 h-2 bg-primary mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl">Our Projects</h2>
        </div>
        <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12" data-aos='slide-up'>
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
              projects && projects.map((pack, index) => (
                <Link key={index} href={`/packages/${pack.slug}`}>
                  <Packages pack={pack} />
                </Link>
              ))
            }
          </div>
         
        </div>
      </div>
      {/* End Package Section Section*/}
      <Footer/>
      </div>
  )
}

export default ProjectsScreen