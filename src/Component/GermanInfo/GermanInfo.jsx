import React from 'react'
// import style from './GermanInfo.module.css'

import LangGer from '../../assets/Images/Lang2.jpg'

export default function GermanInfo() {
    return (
        <>

            <div className='container w-[98%] lg:w-[90%] xl:w-[85%] m-auto pb-7 h-93'>
                <div className='text-center '>
                    <h2 className='font-400 text-3xl leading-10 my-5 capitalize inline-block p-5 pb-3 border-b-3 border-b-black'>Deutsch Sprache</h2>
                </div>

                <div className='flex flex-col flex-wrap lg:flex-nowrap lg:flex-row items-center lg:items-stretch pt-3 justify-center '>
                    {/* <div className='w-1/2  mb-4 lg:mb-0 lg:w-1/3 flex  justify-center  '>
                        <img src={LangGer} alt="German" className='md:w-4/6 lg:w-3/4 h-1/2 lg:h-3/4 object-center rounded-xl' />
                    </div> */}
                    <div className='w-19/20 lg:w-2/3  flex'>
                        <ul className='list-disc ml-7 text-xl'>
                            <li> Fließend in Wort und Schrift </li>
                            <li> C1-Zertifikat vor vier Jahren erworben</li>
                            <li> Sicher in akademischer und beruflicher Kommunikation </li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}
