import React from 'react'
// import style from './NavBar.module.css'
import Logo from "../../assets/Images/Profolio Main Logo.png";
// import img from "../../assets/Images/belalAbout.jpg"
import img from "../../assets/Images/belalIMG2.jpeg"

import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Avatar,
} from "@heroui/react";
import { Link, NavLink } from 'react-router-dom';


export const BelalLogo = () => {
    return (
        <img src={Logo} alt="Logo" className='navBarLogo w-20 h-20 cursor-pointer' />
    );
};

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { name: "Startseite", path: "/" },
        { name: "Fähigkeiten", path: "/skills" },
        { name: "Erfahrung", path: "/experience" },
        { name: "Projekte", path: "/projects" },
        { name: "Über mich", path: "/about" },
        { name: "Kontakt", path: "/contact" },
    ];


    return (
        <>
            <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent className="md:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="md:hidden pr-3" justify="start">
                    <NavbarBrand>
                        <Link to={"/"} >
                            <BelalLogo />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden md:flex gap-4" justify="start">
                    <NavbarBrand>
                        <Link to={"/"} >
                            <BelalLogo />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden md:flex gap-4" justify='center'>
                    <NavbarItem>
                        <NavLink color="foreground" to={""} className={({ isActive }) =>
                            isActive ? "text-[#2F4F4F] border-1 border-[#2F4F4F] px-5 py-2 rounded-2xl" : "text-black"
                        } >
                            {/* Home */}Startseite
                        </NavLink>
                    </NavbarItem>

                    <NavbarItem>
                        <NavLink color="foreground" to={"/skills"} className={({ isActive }) =>
                            isActive ? "text-[#2F4F4F] border-1 border-[#2F4F4F] px-5 py-2 rounded-2xl" : "text-black"
                        } >
                            {/* Skills */}Fähigkeiten
                        </NavLink>
                    </NavbarItem>

                    <NavbarItem>
                        <NavLink color="foreground" to={"/experience"} className={({ isActive }) =>
                            isActive ? "text-[#2F4F4F] border-1 border-[#2F4F4F] px-5 py-2 rounded-2xl" : "text-black"
                        } >
                            {/* Experience */}Erfahrung
                        </NavLink>
                    </NavbarItem>

                    <NavbarItem>
                        <NavLink color="foreground" to={"/projects"} className={({ isActive }) =>
                            isActive ? "text-[#2F4F4F] border-1 border-[#2F4F4F] px-5 py-2 rounded-2xl" : "text-black"
                        } >
                            {/* Projects */}Projekte
                        </NavLink>
                    </NavbarItem>

                    <NavbarItem>
                        <NavLink color="foreground" to={"/about"} className={({ isActive }) =>
                            isActive ? "text-[#2F4F4F] border-1 border-[#2F4F4F] px-5 py-2 rounded-2xl" : "text-black"
                        } >
                            {/* About Me */}Über mich
                        </NavLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLink color="foreground" to={"/contact"} className={({ isActive }) =>
                            isActive ? "text-[#2F4F4F] border-1 border-[#2F4F4F] px-5 py-2 rounded-2xl" : "text-black"
                        } >
                            {/* Contact */}Kontakt
                        </NavLink>
                    </NavbarItem>

                </NavbarContent>

                <NavbarContent justify="end">
                    <Link to={"/about"}>
                        <Avatar isBordered color="primary" src={img} />
                    </Link>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <NavLink
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                to={item.path}
                                size="lg"
                                onClick={() => { setIsMenuOpen(false) }}
                            >
                                {item.name}
                            </NavLink>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>

            </Navbar>

        </>
    )
}
