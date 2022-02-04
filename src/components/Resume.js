import React from 'react' 
import { Document, Page } from 'react-pdf'
import SonjaParsellResume from '../assets/SonjaParsellResume.pdf'

const Resume = () => {



    return(
        <div>
            <button className="text-black bg-indigo-300 border-0 py-2 px-7 mr-2 mt-4 outline outline-2  outline-offset-2 hover:bg-red-400 rounded text-sm">View</button>

            <button className="text-black bg-indigo-300 border-0 py-2 px-2 ml- 2 outline outline-2  outline-offset-2 hover:bg-red-400 rounded text-sm">Download</button>
        </div>
    )
}

export default Resume;