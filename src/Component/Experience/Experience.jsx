import React from 'react'
// import style from './Experience.module.css'
import { Card, CardBody, CardHeader } from '@heroui/react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


export default function Experience() {
    return (
        <>

            <div className="text-center">

                <h2 className='font-400 text-2xl lg:text-3xl leading-10 my-5 uppercase inline-block p-1 md:p-3 lg:p-5 pb-3 border-b-3 border-b-black'>Berufserfahrung & Praktika</h2>

                <div className='container w-[85%] m-auto mb-30 mt-7'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="group ">
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">Werkstudent – EN Engineering </h3>
                                <p className='text-slate-500'>Duisburg, Deutschland | Nov 2024 – Aug 2025</p>
                            </CardHeader>
                            <CardBody className="overflow-visible ">
                                <ul className='list-disc ml-7 text-xl '>
                                    <li className='py-2'> Mitwirkung in der Grundlagenermittlung (HOAI Lph 1): Aufbereitung und Analyse von Kataster- und Bestandsunterlagen. </li>
                                    <li className='py-2'> Unterstützung der Vorplanung (Lph 2) für Leitungs- und Trassenprojekte (Trinkwasser, Gas, Strom). </li>
                                    <li className='py-2'> Vorbereitung der Unterlagen für die Leistungsphase 3. </li>
                                    <li className='py-2'> Teilnahme an Projekt- und Kundenterminen inkl. Protokollführung und Dokumentation. </li>
                                    <li className='py-2'>Erste Erfahrungen in der Mengenermittlung aus AutoCAD-Plänen als Grundlage für Leistungsverzeichnisse (LV). </li>
                                </ul>
                            </CardBody>
                            <CardHeader className="pb-8 pt-2 ">
                                <Swiper
                                    spaceBetween={8}
                                    slidesPerView={2.5}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                >
                                    <SwiperSlide> <div className='bg-gray-300 p-2 rounded-large'>HOAI</div> </SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>AutoCAD</div></SwiperSlide>
                                    <SwiperSlide> <div className='bg-gray-300 p-2 rounded-large'>Netzplanung</div></SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Dokumentation</div></SwiperSlide>
                                </Swiper>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>

                        <Card className="group ">
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">Praktikum – Excellence Gate Institute </h3>
                                <p className='text-slate-500'>Ägypten | September 2020</p>
                            </CardHeader>
                            <CardBody className="overflow-visible ">
                                <ul className='list-disc ml-7 text-xl '>
                                    <li className='py-2'> Erstellung eines Terminplans mit Primavera P6. </li>
                                    <li className='py-2'> Strukturierung von Vorgängen und Abhängigkeiten. </li>
                                    <li className='py-2'>Analyse der Projektlaufzeit und Bauabläufe. </li>
                                </ul>
                            </CardBody>
                            <CardHeader className="pb-8 pt-2 ">
                                <Swiper
                                    spaceBetween={8}
                                    slidesPerView={2}
                                >
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Primavera P6</div> </SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Projektplanung</div></SwiperSlide>
                                </Swiper>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>

                        <Card className="group ">
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">Praktikum – Technisches Büro Hochbau</h3>
                                <p className='text-slate-500'>Ägypten | Aug 2020 – Okt 2020</p>
                            </CardHeader>
                            <CardBody className="overflow-visible ">
                                <ul className='list-disc ml-7 text-xl '>
                                    <li className='py-2'> Mengenermittlung nach Plan (AutoCAD). </li>
                                    <li className='py-2'> Unterstützung der Kalkulation und Abrechnung anhand von Bauleitungsberichten. </li>
                                    <li className='py-2'>Erstellung von Fotodokumentationen und Projektunterlagen. </li>
                                </ul>
                            </CardBody>
                            <CardHeader className="pb-8 pt-2">
                                <Swiper
                                    spaceBetween={8}
                                    slidesPerView={2}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                >
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>AutoCAD</div></SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Mengenermittlung</div></SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Kalkulation</div></SwiperSlide>
                                </Swiper>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>

                        <Card className="group ">
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">Training – The Arab Contractors</h3>
                                <p className='text-slate-500'> Ägypten | Aug 2019 – Nov 2019</p>
                            </CardHeader>
                            <CardBody className="overflow-visible ">
                                <ul className='list-disc ml-7 text-xl '>
                                    <li className='py-2'> Kontrolle von Beton- und Bewehrungsarbeiten vor Ort. </li>
                                    <li className='py-2'> Koordination von Betonlieferungen. </li>
                                    <li className='py-2'>Betreuung der Arbeiter und Abstimmung mit Lieferanten. </li>
                                </ul>
                            </CardBody>
                            <CardHeader className="pb-8 pt-2 ">
                                <Swiper
                                    spaceBetween={8}
                                    slidesPerView={2}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000
                                    }}
                                >
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Bauüberwachung</div></SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Baustelle</div></SwiperSlide>
                                    <SwiperSlide><div className='bg-gray-300 p-2 rounded-large'>Koordination</div></SwiperSlide>
                                </Swiper>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
