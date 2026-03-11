import React from 'react'
// import style from './Projects.module.css'
import { Card, CardBody, CardHeader } from '@heroui/react'

export default function Projects() {
    return (
        <>

            <div className=' mb-50'>
                <div className="text-center">
                    <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Projekte</h2>
                    <p className='text-large font-300'>Ausgewählte Projekte aus Studium und praktischer Erfahrung im Bereich Infrastruktur und Netzplanung.</p>
                </div>

                <div className="container m-auto w-[95%] md:w-[90%] lg:w-[80%]">

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 ">

                            <div className=' lg:border-r-4 lg:border-r-black order-last lg:order-0'>
                                <div className="relative pt-10">
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F]  absolute lg:right-[-5%] xl:right-[-3.2%]'> <i className="fa-solid fa-circle-nodes text-white "></i></span>
                                    <div className='flex justify-center'>
                                        <Card className=" w-7/8">
                                            <CardHeader className="pb-0 pt-2 flex-col items-start">
                                                <h3 className="font-bold text-large py-3 capitalize">Beschreibung :</h3>
                                                <p className='text-slate-600'>Mitwirkung an der Planung und Vorplanung von Leitungs- und Kabeltrassen (Trinkwasser, Gas, Strom)
                                                    auf Basis von Kataster- und Bestandsunterlagen gemäß HOAI Lph 1–2.</p>

                                                <h3 className="font-bold text-large py-3 capitalize">Rolle</h3>
                                                <p className='text-slate-600'>Werkstudent – Technisches Büro</p>

                                                <h3 className="font-bold text-large py-3 capitalize">Tools (Badges)</h3>
                                                <div className='flex mb-8 gap-3'>
                                                    <div className='bg-gray-300 p-2 rounded-large'>AutoCAD</div>
                                                    <div className='bg-gray-300 p-2 rounded-large'>HOAI Lph 1–2</div>
                                                    <div className='bg-gray-300 p-2 rounded-large'>Netzplanung</div>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </div>

                                </div>
                            </div>

                            <div className=' flex justify-center order-first lg:order-0'>
                                <div className='pt-10 w-7/8 '>
                                    <h2 className='text-xl font-semibold '>Netzplanung und Vorplanung von Versorgungsleitungen</h2>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 ">
                            <div className='lg:border-r-4 lg:border-r-black  relative order-first lg:order-0'>
                                <div className="relative pt-10">
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F]  absolute lg:right-[-5%] xl:right-[-3.2%]'> <i className="fa-solid fa-chart-gantt text-white"></i></span>
                                    <div className=' flex justify-center '>
                                        <div className='w-7/8  lg:text-right'>
                                            <h2 className='text-xl font-semibold '>Terminplanung eines Bauprojekts mit Primavera P6</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='pt-10 order-last lg:order-0'>
                                <div className='flex justify-center'>
                                    <Card className=" w-7/8 m-auto">
                                        <CardHeader className="pb-0 pt-2 flex-col items-start">
                                            <h3 className="font-bold text-large py-3 capitalize">Beschreibung :</h3>
                                            <p className='text-slate-600'>Erstellung eines strukturierten Terminplans mit Vorgängen, Abhängigkeiten und Analyse der Gesamtdauer eines Bauprojekts.</p>

                                            <h3 className="font-bold text-large py-3 capitalize">Rolle</h3>
                                            <p className='text-slate-600'>Praktikum</p>

                                            <h3 className="font-bold text-large py-3 capitalize">Tools (Badges)</h3>
                                            <div className='flex mb-8 gap-3'>
                                                <div className='bg-gray-300 p-2 rounded-large'>Primavera P6</div>
                                                <div className='bg-gray-300 p-2 rounded-large'>Projektmanagement</div>
                                            </div>
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
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F]  absolute lg:right-[-5%] right-[-3.2%]'> <i className="fa-solid fa-pen-ruler text-white "></i></span>
                                    <div className='flex justify-center'>
                                        <Card className=" w-7/8">
                                            <CardHeader className="pb-0 pt-2 flex-col items-start">
                                                <h3 className="font-bold text-large py-3 capitalize">Beschreibung :</h3>
                                                <p className='text-slate-600'>Planbasierte Mengenermittlung aus technischen Zeichnungen als Grundlage für Leistungsverzeichnisse und Kostenkalkulation.</p>

                                                <h3 className="font-bold text-large py-3 capitalize">Rolle</h3>
                                                <p className='text-slate-600'>Praktikum – Technisches Büro</p>

                                                <h3 className="font-bold text-large py-3 capitalize">Tools (Badges)</h3>
                                                <div className='flex mb-8 gap-3'>
                                                    <div className='bg-gray-300 p-2 rounded-large'>AutoCAD</div>
                                                    <div className='bg-gray-300 p-2 rounded-large'>Mengenermittlung</div>
                                                </div>
                                            </CardHeader>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-center order-first lg:order-0'>
                                <div className='pt-10 w-7/8'>
                                    <h2 className='text-xl font-semibold '>Mengenermittlung aus AutoCAD-Plänen</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className=' lg:border-r-4 lg:border-r-black  relative order-first lg:order-0'>
                                <div className="relative pt-10">
                                    <span className='hidden w-[50] h-[50] p-3 lg:flex rounded-full bg-[#2F4F4F] absolute lg:right-[-5%] right-[-3.2%]'> <i className="fa-solid fa-map-location-dot text-white"></i></span>
                                    <div className=' flex justify-center '>
                                        <div className='w-7/8  lg:text-right'>
                                            <h2 className='text-xl font-semibold '>GIS-basierte Trassenvisualisierung</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-10 order-last lg:order-0'>
                                <div className='flex justify-center'>
                                    <Card className=" w-7/8 m-auto">
                                        <CardHeader className="pb-0 pt-2 flex-col items-start">
                                            <h3 className="font-bold text-large py-3 capitalize">Beschreibung :</h3>
                                            <p className='text-slate-600'>Visualisierung und Analyse von Trassenverläufen mit GIS-Tools im Rahmen von Studienprojekten.</p>

                                            <h3 className="font-bold text-large py-3 capitalize">Rolle</h3>
                                            <p className='text-slate-600'>Studienprojekt</p>

                                            <h3 className="font-bold text-large py-3 capitalize">Tools (Badges)</h3>
                                            <div className='flex mb-8 gap-3'>
                                                <div className='bg-gray-300 p-2 rounded-large'>QGIS</div>
                                                <div className='bg-gray-300 p-2 rounded-large'>GIS</div>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </div>
                        </div>

                    </div> */}

                </div>
            </div>
        </>
    )
}
