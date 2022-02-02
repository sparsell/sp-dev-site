import React from 'react' 
import { Document, Page } from 'react-pdf'
import SonjaParsellResume from '../assets/SonjaParsellResume.pdf'

const Resume = () => {

//     showResume = () => {
//         <Document file={SonjaParsellResume}>
//             <Page pageNumber={1} />
//         </Document>
// }

    // downloadResume = () => {
    //     return(
    //     )
    // }



    return(
        <div>
            {/* <button onClick={showResume()}>View</button> */}
             {/* <button onClick={downloadResume()}>Download</button> */}
            <button className="text-black bg-indigo-300 border-0 py-2 px-4 outline outline-2 hover:bg-indigo-600 rounded text-sm">View</button>
            <button className="text-white font-bold bg-red-400 hover:bg-red-400 py-2 px-4 rounded">Download</button>
        </div>
    )
}

export default Resume;