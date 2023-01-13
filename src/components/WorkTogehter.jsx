import React from 'react'

const WorkTogether = () => {
  return (
    <div>
        <h1 className='text-3xl text-center font-bold text-gray-400'>WorkTogether</h1>

        <div className='border mt-3 p-2 text-center bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500'>Informationen</h2>
            <span>GitHub Link: <a href="https://github.com/WastKurrle/work_together" className='text-gray-500 font-semibold'>WorkTogether</a></span>

            <div className='mt-3'>
                <h5 className='text-lg text-blue-600 font-semibold'>Projekt Beschreibung</h5>

                <p>
                    Auf dieser Plattform können Firmen eine Organisation erstellen und in dieser Workspaces.
                    In einem Workspace können von Mitglieder Datein Hochgeladen werden und ein Workspace interner Chat
                    genutzt werden. Dies eignet sich besonders für Firmen die überwiegend remote arbeiten. Man kann einer
                    Organisation beitreten, indem man eine Anfrage sendet, welche dann vom Eigentümer angenommen oder abgelehnt werden kann.
                </p>
            </div>
        </div>

        <div className='border mt-3 p-2 text-center bg-gray-900 text-gray-200 rounded-lg hover:shadow-2xl hover:scale-110 duration-500'>
            <h2 className='text-lg font-semibold text-green-500'>Verwendete Technologien</h2>
            
            <div className='flex justify-center'>
                <div>
                    <h5 className='text-lg text-blue-600 font-semibold'>Frontend</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>VueJs</li>
                        <li>Axios für die Kommunikation zum Backend</li>
                        <li>Bootstrap</li>
                    </ul>

                    <h5 className='text-lg text-blue-600 font-semibold'>Backend</h5>
                    <ul className='list-disc text-left mb-3'>
                        <li>Django</li>
                        <li>Django Restframework</li>
                        <li>Knox Authentication Token</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkTogether