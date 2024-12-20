import React from 'react'

function Packages({ pack }) {
    return (

        <div class="w-full max-w-xs text-center">
                <img class="object-cover object-top w-full h-48 mx-auto rounded-lg bg-black" src={pack.image} alt="hannah" />

                <div class="mt-2">
                    <h3 class="text-md font-medium text-gray-700 ">{pack.title}</h3>
                    
                </div>
            </div>

    )
}

export default Packages