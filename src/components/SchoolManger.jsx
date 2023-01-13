import React from 'react'

const SchoolManger = () => {
  return (
    <div>
        <h1 className='text-3xl text-center font-bold text-gray-400'>Schulmanager</h1>

        <div className='border mt-3 p-2 text-center bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500'>Informationen</h2>
            <span>GitHub Link: <a href="https://github.com/WastKurrle/schoolmanager" className='text-gray-500 font-semibold'>Schulmanager</a></span>

            <div className='mt-3'>
                <h5 className='text-lg text-blue-600 font-semibold'>Projekt Beschreibung</h5>

                <p>
                    Auf dieser Plattform kann eine Schule erstellt werden welche dann Lehrer, Schüler, Klassen Verwalten kann
                    Es können Klassen erstellt werden sowie Fächer. Lehrer können Klassen zugeteilt werden mit dem entsprechenden Fach Ebenfalls 
                    können Stundenpläne für die Klassen erstellt werden welcher dann auch angezeigt wird Der Stundenplan wird dann 
                    auch individuell bei den Lehrer angezeigt 
                    welche dann sehen wann, in welchem Fach und welche Klasse sie Unterrichten müssen
                </p>
            </div>
        </div>

        <div className='border mt-3 p-2 text-center bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500'>Verwendete Technologien</h2>
            
            <div className='flex justify-center'>
                <div>
                    <h5 className='text-lg text-blue-600 font-semibold'>Frontend</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>Django Templatesyntax</li>
                        <li>FullCalendar</li>
                        <li>Bootstrap</li>
                    </ul>

                    <h5 className='text-lg text-blue-600 font-semibold'>Backend</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>Django</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SchoolManger