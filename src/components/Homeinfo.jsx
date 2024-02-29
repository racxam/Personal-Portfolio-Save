
import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
       <p className='font-medium sm:text-xl text-center'>{text}</p> 
        <Link to={link} className='neo-brutalism-white neo-btn'>{btnText} ➦</Link>
    </div>

)
const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 '>🙏 नमस्ते!,<span className='font-bold'> Sumit</span> Here!
        <br />
        Pahadi Software Engineer From Bharat!
        </h1>
    ),
    2:(
        <InfoBox text="A fresh and willing Software Engineer ready for work in Real world" link={'/about'} btnText={"About me!"}/>
        
    ),
    3:(
        <InfoBox text="Have created many Real World Projects, Intrigued?🤔" link={'/projects'} btnText={"Check Out My Projects!"}/>
    ),
    4:(
        <InfoBox text="I am not distant; just a few keystrokes away!" link={'/contact'} btnText={"Quick Chat"}/>
    )
}

const Homeinfo = ({currentStage}) => {
  return (
    renderContent[currentStage]||null
  )
}

export default Homeinfo
