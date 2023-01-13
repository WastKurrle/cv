import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
        <h1 className='text-3xl text-center font-bold text-gray-400'>Projekte</h1>

        <div className='border mt-3 p-2 text-center bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500'>Projekt Übersicht</h2>

            <div className='flex justify-center'>
                <div>
                    <h5 className='text-lg font-bold text-blue-600'>C#</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>Konsolen Anwendungen</li> 
                        <li>GUIs mit WPF z.B. Bankmanager oder OnlineShop</li>
                    </ul>

                    <h5 className='text-lg font-bold text-blue-600'>Python</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>Konsolen Anwendungen</li>
                        <li>Backends mit Django oder Flask</li>
                    </ul>


                    <h5 className="text-lg font-bold text-blue-600">JavaScript/TypeScript</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>Mit purem Js einfache Webseiten gebaut</li>
                        <li>Frameworks wie React oder Vue in komplexen Projekten genutzt</li>
                    </ul>

                    <h5 className="text-lg font-bold text-blue-600">Große Projekte die ich umgesezt habe</h5>
                    <ul className='list-disc text-left mb-3'>
                      <li><Link to='/projects/schoolmanager' className='underline'>Schulmanager</Link></li>
                      <li><Link to='/projects/work-together' className='underline'>WorkTogether</Link></li>
                    </ul>

                    <p className='text-green-700'>
                      Für mehr Informationen zu den Projekten einfach auf die Namen der Projekte klicken
                    </p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Projects