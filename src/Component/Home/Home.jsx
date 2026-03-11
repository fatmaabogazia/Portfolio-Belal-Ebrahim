import React from 'react'
// import style from './Home.module.css'
import { Button } from '@heroui/react'
// import img from '../../assets/Images/Belal Image.png'
import img from '../../assets/Images/belalIMG1.jpeg'
// import img from '../../assets/Images/belalIMG2.jpeg'
import LogoImg from '../../assets/Images/Profolio Logo.png'
import profilImg from '../../assets/Images/image2.png'
import cvPdf from '../../assets/Abdelmaksod_Belal.pdf'

// import LangAra from '../../assets/Images/Lang1.jpg'
// import LangGer from '../../assets/Images/Lang2.jpg'
// import LangEng from '../../assets/Images/Lang3.jpg'

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <div className='hidden lg:flex h-screen'>

                <div className="leftSide w-1/2" >
                    <div style={{ backgroundImage: `url(${img})` }} className='w-full h-full bg-contain bg-fixed bg-no-repeat'>
                    </div>
                </div>

                <div className="rightSide w-1/2 bg-[#EBEDF0] flex justify-center flex-col lg:pl-7 xl:pl-15 2xl:pl-20">
                    <h1 className='text-[#2F4F4F] capitalize text-7xl font-bold mb-5 pb-0 leading-24'>belal <br /> abdelmaksod</h1>
                    <p className='text-[#2F4F4F] text-4xl font-400 leading-11 mt-0 mb-0 max-w-150'> Bauingenieur, spezialisiert auf Infrastruktur- und Umweltingenieurwesen, mit Erfahrung in der Planung von Versorgungsleitungen.</p>
                </div>
            </div>

            <div className='inline-block w-full bg-[#EBEDF0]  lg:hidden'>
                <div className='flex justify-center items-center overflow-hidden h-65 sm:h-100 md:h-150 p-3'>
                    <div style={{ backgroundImage: `url(${img})` }} className=' w-full h-full bg-fixed bg-no-repeat bg-contain md:bg-cover '>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <div className=" flex  w-19/20 flex-col pb-5">
                        <h1 className='text-[#2F4F4F] capitalize text-4xl md:text-5xl font-bold mb-3 pb-0 leading-12 md:leading-15'>belal <br /> abdelmaksod</h1>
                        <p className='text-[#2F4F4F] text-4xl font-400 leading-11 capitalize mt-0 mb-0 max-w-150'> Civil Engineer specialized in Infrastructure and Environment with experience in network planning.</p>
                    </div>
                </div>
            </div>


            <div className="profileHome flex flex-col flex-wrap lg:flex-row lg:flex-nowrap bg-[#F9F9F9]">
                <div className='w-19/20 lg:w-1/2 flex flex-col lg:justify-center lg:items-end order-last lg:order-0 pb-5 lg:pb-0 pl-7 '>
                    <div>
                        <h2 className='font-bold text-4xl leading-12 '>Profil</h2>
                        <p className='font-550 text-xl leading-7 max-w-160 my-3'> Absolvent des Bauingenieurwesens (Universität Duisburg-Essen) mit Vertiefung
                            Infrastruktur und Umwelt. Praxiserfahrung im Projektmanagement sowie in der
                            Terminplanung (Primavera P6) und als Werkstudent im technischen Büro. Sicher im
                            Umgang mit AutoCAD, MS Office (insb. Excel) und QGIS. Strukturierte, teamorientierte und
                            verantwortungsbewusste Arbeitsweise. Grundkenntnisse in HOAI und VOB.</p>
                        <Button as={"a"} href={cvPdf} download radius="md" className='bg-[#2F4F4F] text-white'> <i className="fa-solid fa-download text-white"></i>  Download CV</Button>
                    </div>
                </div>

                <div className='lg:w-1/2 flex justify-center items-center order-first lg:order-0 p-10 lg:p-0'>
                    <img src={profilImg} alt="planning" className='lg:w-3/4 h-3/4 rounded-2xl shadow-2xl' />
                </div>
            </div>

            <div className='text-center'>
                <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Sprachen</h2>

                <div className='container w-[85%] m-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <Link to={"/arabicInfo"}>
                            <Card className="group">
                                <CardHeader className="pb-0 pt-2 flex-col items-center">
                                    <h3 className="text-xl capitalize font-bold text-gray-400">Arabisch</h3>
                                    <h4 className="font-bold text-large py-3">Muttersprache</h4>
                                </CardHeader>
                                < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                                </div>
                            </Card>
                        </Link>

                        <Link to={"/germanInfo"}>
                            <Card className="group">
                                <CardHeader className="pb-0 pt-2 flex-col items-center">
                                    <h3 className="text-xl capitalize font-bold text-gray-400">Deutsch</h3>
                                    <h4 className="font-bold text-large py-3">Fließend in Wort und Schrift </h4>
                                </CardHeader>
                                < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                                </div>
                            </Card>
                        </Link>

                        <Link to={"/englishInfo"}>
                            <Card className="group">
                                <CardHeader className="pb-0 pt-2 flex-col items-center">
                                    <h3 className="text-xl capitalize font-bold text-gray-400">Englisch</h3>
                                    <h4 className="font-bold text-large py-3">Verhandlungssicher</h4>
                                </CardHeader>
                                < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                                </div>
                            </Card>
                        </Link>

                    </div>
                </div>
            </div>

            <div className='flex flex-col flex-wrap lg:flex-row lg:flex-nowrap mt-20'>
                <div className='lg:w-3/5 flex justify-center order-first lg:order-0'>
                    <img src={LogoImg} alt="logo image" className='w-3/5 lg:w-2/3 ' />
                </div>

                <div className='lg:w-2/5 py-5 lg:py-0 flex justify-center items-center bg-[#F9F9F9] order-last lg:order-0'>
                    <div className='pl-3 max-w-120 '>
                        <h2 className='font-bold text-3xl lg:text-4xl text-[#2F4F4F]'> Praxisnahe technische Planung im Infrastrukturbereich – mit Verantwortung für die Gestaltung und Planung unterirdischer Versorgungsleitungen. </h2>
                        <Button radius="md" className='bg-[#2F4F4F] text-white mt-10 text-2xl p-5'><Link to={"/contact"}> Kontaktiere mich  </Link> </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
