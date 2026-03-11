import React from 'react'
// import style from './AboutMe.module.css'
import { Avatar, Badge, Button, Card, CardHeader } from '@heroui/react'

import cvPdf from '../../assets/Abdelmaksod_Belal.pdf'
// import imgAbout from '../../assets/Images/belalAbout.jpg'
import imgAbout from '../../assets/Images/belalIMG2.jpeg'
import imgApplication from '../../assets/Images/applicationImage.png'
import imgFührerschein from '../../assets/Images/FührerscheinPhoto.png'


export const CheckIcon = ({ size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height || 18}
            viewBox="0 0 24 24"
            width={size || width || 18}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};


export default function AboutMe() {

    return (
        <>

            <div className='text-center '>
                <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Über mich</h2>
            </div>

            <div className="profileHome py-5 flex flex-col items-center lg:flex-row bg-[#F9F9F9] ">
                <div className='w-3/4 lg:w-2/5 flex justify-center items-center'>
                    <img src={imgAbout} alt="planning" className='w-1/2 h-1/3 rounded-2xl shadow-2xl object-cover ' />
                </div>

                <div className='w-19/20 lg:w-3/5 flex flex-col justify-center items-start'>
                    <div>
                        <h2 className='font-bold text-4xl leading-12 text-[#2F4F4F]'>Profil</h2>
                        <p className='font-550 text-xl leading-7 max-w-160 my-3'> Absolvent des Bauingenieurwesens (Universität Duisburg-Essen) mit Vertiefung
                            Infrastruktur und Umwelt. Praxiserfahrung im Projektmanagement sowie in der
                            Terminplanung (Primavera P6) und als Werkstudent im technischen Büro. Sicher im
                            Umgang mit AutoCAD, MS Office (insb. Excel) und QGIS. Strukturierte, teamorientierte und
                            verantwortungsbewusste Arbeitsweise. Grundkenntnisse in HOAI und VOB.</p>

                        <Button as={"a"} href={"#application"} radius="md" className='bg-[#2F4F4F] text-white mr-3'> <i className="fa-brands fa-black-tie text-white"></i>  Bewerbung</Button>
                        <Button as={"a"} href={cvPdf} download radius="md" className='bg-[#2F4F4F] text-white'> <i className="fa-solid fa-download text-white"></i>  Download CV</Button>
                    </div>
                </div>
            </div>


            <div className=' mb-20'>
                <div className="text-center">
                    <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Ausbildung</h2>
                </div>

                <div className="container m-auto w-[95%] md:w-[90%] lg:w-[80%]">

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2  ">
                            <div className=' lg:border-r-4 lg:border-r-black  relative order-last lg:order-0'>
                                <div className="relative pt-10">
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F]  absolute lg:right-[-5%] xl:right-[-3.2%]'> <i className="fa-solid fa-circle-nodes text-white "></i></span>
                                    <div className='flex justify-center'>
                                        <Card className=" w-7/8 pb-5 ">
                                            <CardHeader className="pb-0 pt-2 flex-col items-start">
                                                <h3 className="font-bold text-large py-3 capitalize">Masterstudium an der Universität Duisburg-Essen</h3>
                                                <ul className='list-disc ml-7 text-xl'>
                                                    <li><span className='text-[#2F4F4F] font-semibold'>Vertiefung :</span>Infrastruktur und Umwelt </li>
                                                    <li><span className='text-[#2F4F4F] font-semibold'>Masterarbeit :</span> Materialwissenschaft / Rheologie. </li>
                                                </ul>
                                            </CardHeader>
                                        </Card>
                                    </div>

                                </div>
                            </div>

                            <div className=' flex justify-center order-first lg:order-0'>
                                <div className='pt-10 w-7/8 '>
                                    <h2 className='text-xl font-semibold text-slate-400'>April 2023 – April 2026</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className=' lg:border-r-4 lg:border-r-black  relative order-first lg:order-0'>
                                <div className="relative pt-10">
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F]  absolute lg:right-[-5%] xl:right-[-3.2%]'> <i className="fa-solid fa-chart-gantt text-white"></i></span>
                                    <div className=' flex justify-center '>
                                        <div className='w-7/8  lg:text-right'>
                                            <h2 className='text-xl font-semibold text-slate-400'>September 2016 – Juli 2021</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-10 order-last lg:order-0'>
                                <div className='flex justify-center'>
                                    <Card className=" w-7/8 m-auto pb-5">
                                        <CardHeader className="pb-0 pt-2 flex-col items-start">
                                            <h3 className="font-bold text-large py-3 capitalize">Bachelorstudium am Nile Higher Institute for Engineering and Technology (Ägypten)</h3>
                                            <ul className='list-disc ml-7 text-xl'>
                                                <li>Abschlussnote 85 %</li>
                                                <li><span className='text-[#2F4F4F] font-semibold'>Schwerpunkt :</span>  Bauingeniurwesen</li>
                                            </ul>
                                        </CardHeader>
                                    </Card>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className=' lg:border-r-4 lg:border-r-black  relative order-last lg:order-0'>
                                <div className="relative pt-10">
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F]  absolute lg:right-[-5%] xl:right-[-3.2%]'> <i className="fa-solid fa-pen-ruler text-white "></i></span>
                                    <div className='flex justify-center'>
                                        <Card className=" w-7/8 pb-5">
                                            <CardHeader className="pb-0 pt-2 flex-col items-start">
                                                <h3 className="font-bold text-large py-3 capitalize">Allgemeine Hochschulreife (Al-Azhar, Ägypten) </h3>
                                                <ul className='list-disc ml-7 text-xl'>
                                                    <li>Abiturnote: 85,3% </li>
                                                </ul>
                                            </CardHeader>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            <div className=' flex justify-center order-first lg:order-0'>
                                <div className='pt-10 w-7/8'>
                                    <h2 className='text-xl font-semibold text-slate-400'>September 2013 – April 2016</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className=' mb-20'>
                <div className="text-center">
                    <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Führerschein</h2>
                </div>

                <div className='container w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] m-auto bg-[#F9F9F9] p-5 rounded-3xl flex gap-5 justify-center'>
                    <div>
                        <Badge isOneChar color="success" content={<CheckIcon />} >
                            <Avatar
                                radius="full"
                                src={imgFührerschein}
                                className='w-20 h-20 object-contain'
                            />
                        </Badge>
                    </div>
                    <div>
                        <h3 className='text-xl text-slate-400 font-bold'> März 2025 :</h3>
                        <p className='text-large font-semibold'> Klasse B (März 2025)</p>
                    </div>

                </div>
            </div>


            <div className=' bg-[#EBEDF0] pb-10'>
                <div className='container w-[96%] sm:w-[92%] md:w-[85%] m-auto' id='application'>
                    <div className='text-center '>
                        <h2 className='font-400 text-3xl leading-10 my-5 capitalize inline-block p-5 pb-3 border-b-3 border-b-black'>Bewerbung</h2>
                    </div>
                    <div className='flex justify-center'>
                        <img src={imgApplication} alt="Application" className='rounded-large' />
                    </div>

                </div>
            </div>
            
        </>
    )
}
