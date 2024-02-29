import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Wants To Create Something!!! <br className='sm:block hidden' /> Let's Build it Together 😇</p>
        <Link to={"/contact"} className='btn'>Contact</Link>

    </section>
  )
}

export default CTA
