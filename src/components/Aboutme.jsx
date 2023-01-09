import React from 'react'
import { useState } from 'react'

const Aboutme = () => {
  
  // Saves the index for the pages
  const [currentPage, setCurrentPage] = useState(1)
  const maxPage = 5

  // Sets the currentPage +1
  const handleNextClick = () => {
    if (currentPage < maxPage) {
      return setCurrentPage(currentPage + 1);
    }

    setCurrentPage(1)
  }

  // Sets the currentPage -1
  const handlePrevClick = () => {
    if (currentPage - 1 > 0) {
      return setCurrentPage(currentPage - 1);
    }

    setCurrentPage(maxPage)
  }

  return (
    <div>
        <h1 className='text-3xl text-center font-bold text-gray-400'>Über mich</h1>

        <div className='border mt-3 p-4 bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500 text-center'>Vorstellung</h2>

            <p>Mein Name ist Sebastian und ich bin 18 Jahre alt. Ich wohne in Rosenheim/Pang. 
              Meine Begeisterung für die Programmierung begann in der 6. Klasse, als wir mit einer einfachen objektorientierten Sprache namens EOS gearbeitet haben. 
              In der 8. Klasse habe ich dann begonnen, C# durch Tutorials zu lernen und habe mich am Ende der 10. Klasse entschieden, meine IT-Karriere mit einer schulischen Ausbildung zum "Informations-Technischen Assistenten" zu starten. 
              Dort habe ich mich sehr viel mit Webtechnologien wie Django, Flask oder NextJS im Backend und React und Vue im Frontend beschäftigt und dort auch schon viele Projekte umgesetzt.</p>
        </div>

        <div className='border mt-3 p-4 bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500 text-center'>Programmier Kenntnisse</h2>
            
            <div className='flex justify-center mt-3'>
              {
                currentPage === 1 &&
                <div>
                  <span className='font-semibold underline'>Programmiersprachen:</span>

                  <ul className='list-disc ml-4'>
                      <li>C#</li>
                      <li>Python</li>
                      <li>JavaScript/TypeScript</li>
                  </ul>
                </div>
              }

              {
                currentPage === 2 &&
                <div>
                  <span className='font-semibold underline'>Datenbanken</span>

                  <ul className='list-disc ml-4'>
                    <li>SQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              }

              {
                currentPage === 3 &&
                <div>
                  <span className='font-semibold underline'>Frontend Frameworks</span>

                  <ul className='list-disc ml-4'>
                    <li>VueJS</li>
                    <li>ReactJS</li>
                  </ul>
                </div>
              }

              {
                currentPage === 4 &&
                <div>
                  <span className='font-semibold underline'>Backend Frameworks</span>

                  <ul className='list-disc ml-4'>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>NextJS</li>
                  </ul>
                </div>
              }

              {
                currentPage === 5 &&
                <div>
                  <span className='font-semibold underline'>Style Frameworks</span>

                  <ul className='list-disc ml-4'>
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
              }
            </div>

            <div className='flex text-center flex-col mt-3'>
              <div className='mb-3'>
                <button className='bg-red-600 p-3 rounded-md w-40' onClick={handlePrevClick}>Zurück</button>
                <button className='bg-green-600 p-3 rounded-md w-40 ml-3' onClick={handleNextClick}>Vor</button>
              </div>

              <p>Seite {currentPage} von {maxPage}</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme