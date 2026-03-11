import React from 'react'
// import style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>

            <div className='bg-[#1B1B1B] text-white pt-10 pb-1'>
                <div className='container w-[95%] md:w-[90%] lg:w-[85%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10'>
                    <div>
                        <h2 className='capitalize text-3xl font-300 leading-10 '> belal abdelmaksod</h2>
                        <p className='my-5 text-slate-500'>Bauingenieur | Infrastruktur- und Versorgungsleitungsplanung </p>
                    </div>

                    <div>
                        <h2 className='capitalize text-3xl font-300 leading-10 '>Kontaktiere mich</h2>
                        <ul>
                            <li> <span className='capitalize text-xl font-200 '>e-mail :</span> <Link as="a" to="mailto:belal.ibrahem160341@gmail.com" className='text-primary'>belal.ibrahem160341@gmail.com </Link> </li>
                            <li> <span className='capitalize text-xl font-200 '>handynummer :</span> <span className='text-primary'>+49 1761 5413675 </span> </li>
                            <li> <span className='capitalize text-xl font-200 '>Adresse :</span> <span className='text-primary'>Duisburger-Str. 445,<br/> 45478 Mülheim an der Ruhr, Deutschland </span> </li>

                        </ul>
                    </div>

                    <div>
                        <h2 className='capitalize text-3xl font-300 leading-10 '>Seitenübersicht</h2>
                        <div className="flex gap-5">
                            <ul>
                                <li className='text-slate-400 hover:text-primary'><Link to={""}>Startseite</Link></li>
                                <li className='text-slate-400 hover:text-primary'><Link to={"/skills"}>Fähigkeiten</Link></li>
                                <li className='text-slate-400 hover:text-primary'><Link to={"/experience"}>Erfahrung</Link></li>
                            </ul>
                            <ul>
                                <li className='text-slate-400 hover:text-primary'><Link to={"/projects"}>Projekte</Link></li>
                                <li className='text-slate-400 hover:text-primary'><Link to={"/about"}>Über mich</Link></li>
                                <li className='text-slate-400 hover:text-primary'><Link to={"/contact"}>Kontakt</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-black my-2 py-2.5 lg:pl-20 lg:pr-50 flex flex-col flex-wrap lg:flex-row lg:flex-nowrap items-center  lg:justify-between'>
                    <div className='pb-3 lg:pb-0'>
                        <p> © COPYRIGHT 2026. ALL RIGHTS RESERVED. </p>
                    </div>
                    <div className='flex'>
                        <Link to={"https://www.facebook.com/share/1CGiU17ta6/"}> <i className="fa-brands fa-facebook text-white text-xl hover:text-primary"></i>  </Link>
                        <Link to={"https://www.instagram.com/belal_ebrahem0098?igsh=MTh4NzlwZW5jemNw"}> <i className="fa-brands fa-instagram text-white text-xl hover:text-primary"></i>  </Link>
                        <Link to={"mailto:belal.ibrahem160341@gmail.com"}> <i className="fa-solid fa-at text-white text-xl hover:text-primary"></i>  </Link>
                    </div>
                </div>

            </div>

        </>
    )
}
