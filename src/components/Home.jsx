import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 className='text-3xl text-center font-bold text-gray-400'>Home</h1>

        <div className='border mt-3 p-2 text-center bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500'>Willkommen</h2>
            <p>
                Auf dieser Seite erfahren Sie mehr über mich und meine Projekte und was mich am Programmieren begeistert
            </p>
        </div>

        <div className='border mt-3 p-2 bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg text-center font-semibold text-green-500'>Informationen zur Seite</h2>

            <ol className='list-decimal m-4'>
                <li className='list-item'>Technologisches</li>
                <ul className='list-disc ml-4'>
                    <li className='list-item'>Seite ist mit React gebaut</li>
                    <li className="list-item">Seite ist eine Singlepage Application</li>
                    <li className="list-item">Design der Seite wurde mit Tailwindcss umgesezt</li>
                </ul>
                <br/>
                <li className='list-item'>Inhaltliches</li>
                <ul className='list-disc ml-4'>
                    <li className='list-item'>Die Seite erweitert meinen Lebenslauf</li>
                    <li className="list-item">Die Seite erklärt meine Begeisterrung zur Programmierung</li>
                    <li className="list-item">Die Seite geht näher auf meine bissher umgesetzen Projekte ein</li>
                </ul>
            </ol>
        </div>
    </div>
  )
}

export default Home