import React from 'react'
import FileViewer from 'react-file-viewer'
import { Link } from 'react-router-dom'
 

const practices = [
    {
        id: 1,
        title: '1-Ámeliy shınıǵıw.',
        file: '1-ameliy.docx',
        type: 'docx'
    },
    {
        id: 2,
        title: '2-Ámeliy shınıǵıw.',
        file: '2-ameliy.docx',
        type: 'docx'
    },
    {
        id: 3,
        title: '3-Ámeliy shınıǵıw.',
        file: '3-ameliy.docx',
        type: 'docx'
    },
    { 
        id: 4,
        title: '4-Ámeliy shınıǵıw.',
        file: '4-ameliy.docx',
        type: 'docx'
    }, 
    { 
        id: 55,
        title: '5-Ámeliy shınıǵıw.',
        file: '5-ameliy.docx',
        type: 'docx'
    }, 
    {
        id: 5,
        title: '6-Ámeliy shınıǵıw.',
        file: '6-ameliy.docx',
        type: 'docx'
    },
    { 
        id: 7,
        title: '7-Ámeliy shınıǵıw.',
        file: '7-ameliy.docx',
        type: 'docx'
    },
    {
        id: 8,
        title: '8-Ámeliy shınıǵıw.',
        file: '8-ameliy.docx',
        type: 'docx'
    }, 
    {
        id: 9,
        title: '9-Ámeliy shınıǵıw.',
        file: '9-ameliy.docx',
        type: 'docx'
    }, 
    {
        id: 10,
        title: '10-Ámeliy shınıǵıw.',
        file: '10-ameliy.docx',
        type: 'docx'
    },
    {
        id: 11,
        title: '11-Ámeliy shınıǵıw.',
        file: '11-ameliy.docx',
        type: 'docx'
    },
    {
        id: 12,
        title: '12-Ámeliy shınıǵıw.',
        file: '12-ameliy.docx',
        type: 'docx'
    },
    {
        id: 13,
        title: '13-Ámeliy shınıǵıw.',
        file: '13-ameliy_or.docx',
        type: 'docx'
    },
    {
        id: 13,
        title: '14-Ámeliy shınıǵıw.',
        file: '13-ameliy.docx',
        type: 'docx'
    },
    {
        id: 14,
        title: '15-Ámeliy shınıǵıw.',
        file: '15-ameliy.docx',
        type: 'docx'
    },
]

const Practices = ({ setTitle }) => {
  return (
    <div>
        <h5 className="heading">
        Ámeliy shınıǵıwlar
        </h5>


        <ul className='list'>
            {
                practices.map(practice => (
                    <li key={practice.id} className="list-item" onClick={() => setTitle(practice.title)}>
                        <Link to={`/practices/docs/${practice.file}`}>
                            {practice.title}
                        </Link>
                    </li>
                ))  
            }
        </ul>
    </div>
  )
}

export default Practices