import React from 'react'
// import style from './Skills.module.css'
import { Card, CardBody, CardHeader, Image, Progress } from '@heroui/react'

import img1 from '../../assets/Images/skills1.jpg'
import img2 from '../../assets/Images/skills2.jpg'
import img3 from '../../assets/Images/skills3.jpg'
import img4 from '../../assets/Images/skills4.jpg'
import img5 from '../../assets/Images/skills5.jpg'

export default function Skills() {
    return (
        <>


            <div className='text-center'>
                <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Kompetenzen</h2>

                <div className="container m-auto w-[80%] ">
                    <Progress
                        className='mb-8'
                        classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",

                        }}
                        label="Microsoft Office (Excel, Word, PowerPoint,Outlook)"
                        radius="sm"
                        showValueLabel={true}
                        size="md"
                        value={90}
                    />
                    <Progress
                        className='mb-8'
                        classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",

                        }}
                        label="Autodesk AutoCAD "
                        radius="sm"
                        showValueLabel={true}
                        size="md"
                        value={85}
                    />
                    <Progress
                        className='mb-8'
                        classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",

                        }}
                        label="Primavera P6 "
                        radius="sm"
                        showValueLabel={true}
                        size="md"
                        value={70}
                    />
                    <Progress
                        className='mb-8'
                        classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",

                        }}
                        label="Revit "
                        radius="sm"
                        showValueLabel={true}
                        size="md"
                        value={50}
                    />
                    <Progress
                        className='mb-8'
                        classNames={{
                            track: "drop-shadow-md border border-default",
                            indicator: "bg-linear-to-r from-pink-500 to-yellow-500",
                            label: "tracking-wider font-medium text-default-600",
                            value: "text-foreground/60",

                        }}
                        label="QGIS "
                        radius="sm"
                        showValueLabel={true}
                        size="md"
                        value={70}
                    />

                </div>


                <h2 className='font-400 text-3xl leading-10 my-5 uppercase inline-block p-5 pb-3'>Die Grundkenntnisse in</h2>

                <div className='container w-[85%] m-auto mb-30 mt-7'>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card className="group">
                            <CardBody className="overflow-visible ">
                                <Image
                                    alt="Card background"
                                    className="object-center rounded-xl w-170 h-70"
                                    src={img1}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">planung </h3>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>
                        <Card className="group">
                            <CardBody className="overflow-visible ">
                                <Image
                                    alt="Card background"
                                    className="object-center rounded-xl w-170 h-70"
                                    src={img2}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">HOAI </h3>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>
                        <Card className="group">
                            <CardBody className="overflow-visible ">
                                <Image
                                    alt="Card background"
                                    className="object-center rounded-xl w-170 h-70"
                                    src={img3}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">VOB </h3>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>
                        <Card className="group">
                            <CardBody className="overflow-visible ">
                                <Image
                                    alt="Card background"
                                    className="object-center rounded-xl w-170 h-70"
                                    src={img4}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">Mengenermittlung für die LV </h3>
                            </CardHeader>
                            < div className='bg-slate-200 w-full h-2 group-hover:bg-[#2F4F4F]'>
                            </div>
                        </Card>
                        <Card className="group">
                            <CardBody className="overflow-visible ">
                                <Image
                                    alt="Card background"
                                    className="object-center rounded-xl w-170 h-70"
                                    src={img5}
                                />
                            </CardBody>
                            <CardHeader className="pb-0 pt-2 flex-col items-center">
                                <h3 className="font-bold text-large py-3 capitalize">Terminplanung</h3>
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
