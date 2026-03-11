import React from 'react'
// import style from './Contact.module.css'
import { Button, Input, Textarea } from '@heroui/react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>

            <div className='text-center'>
                <h2 className='font-400 text-3xl leading-10 my-1 uppercase inline-block p-5 pb-3 border-b-3 border-b-black'>Kontakt</h2>

                <div className='container w-[95%] md:w-[90%] lg:w-[80%] m-auto py-5 lg:py-15'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <div className='flex flex-col items-center justify-center max-w-120 m-auto order-last lg:order-0'>
                            <p className='text-xl pb-5'>Duisburger Straße  445, 45478 Mülheim an der Ruhr, Deutschland</p>
                            {/* <p className='text-slate-600 text-large'> <i class="fa-solid fa-phone"></i> +49 1573 4914134</p> */}
                            <p className='text-slate-600 text-large'> <i class="fa-solid fa-phone"></i> +49 1761 5413675</p>
                            <p className='text-slate-600 text-large pb-10'> <i class="fa-regular fa-envelope"></i> belal.ibrahem160341@gmail.com</p>
                            {/* <p className=' text-large '> 24 Stunden verfügbar </p> */}
                            <div className="flex gap-4 pt-4">
                                <Link to={"https://www.facebook.com/share/1CGiU17ta6/"}> <i className="fa-brands fa-facebook  text-2xl hover:text-primary"></i>  </Link>
                                <Link to={"https://www.instagram.com/belal_ebrahem0098?igsh=MTh4NzlwZW5jemNw"}> <i className="fa-brands fa-instagram  text-2xl hover:text-primary"></i>  </Link>
                            </div>
                        </div>

                        <div className='order-first lg:order-0 py-3 lg:py-0'>
                            <div className=' lg:flex gap-5 '>
                                <Input label="Name" type="text" className='py-5 lg:py-0' />
                                <Input label="Telefonnummer" type="tel" />
                            </div>
                            <Input label="E-mail" type="email" className='py-5' />
                            <Textarea className="" label="Nachricht" placeholder="Nachricht eingeben" />
                            <Button radius="md" className='bg-[#2F4F4F] text-white mt-10 text-2xl p-4 lg:p-5 w-full capitalize'><Link to={"/contact"}> absenden  </Link> </Button>
                        </div>
                    </div>
                </div>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.1415012106213!2d6.825527650249508!3d51.43249306298052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c08d89cf4fed%3A0xcdb702fdc0f20e0a!2zRHVpc2J1cmdlciBTdHIuIDQ0NSwgNDU0NzggTcO8bGhlaW0gYW4gZGVyIFJ1aHIsINij2YTZhdin2YbZitin!5e0!3m2!1sar!2seg!4v1768599210081!5m2!1sar!2seg"
                        width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </>
    )
}
