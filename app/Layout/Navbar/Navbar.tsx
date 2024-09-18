"use client"
import React, { useState } from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'

// For React Icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";


const NavLinks = [
    {
        LinkText: "Home",
        LinkTo: "/",
    }, {
        LinkText: "About",
        LinkTo: "/",
    }, {
        LinkText: "Services",
        LinkTo: "/",
    }, {
        LinkText: "Classes",
        LinkTo: "/",
    }, {
        LinkText: "Contact",
        LinkTo: "/",
    },
]

const NavLinkNormal = [
    {
        LinkText: "Profile",
        LinkTo: "/",
    }, {
        LinkText: "Blogs",
        LinkTo: "/",
    }, {
        LinkText: "Shop",
        LinkTo: "/",
    }, {
        LinkText: "Yoga",
        LinkTo: "/",
    }, {
        LinkText: "Exercise",
        LinkTo: "/",
    },
]

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={styles.Navbar}>
            <div className={styles.NavLinks}>
                {
                    NavLinks.map((I) => (
                        <div key={I.LinkTo}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>
            <div>
                <Link href={"/"}>
                    <img src="/assets/logo.png" alt="" />
                </Link>
            </div>

            <div className={styles.NavLinks}>
                {
                    NavLinkNormal.map((I) => (
                        <div key={I.LinkTo}>
                            <Link href={I.LinkTo}>{I.LinkText}</Link>
                        </div>
                    ))
                }
            </div>


            <HiOutlineMenuAlt3
                onClick={toggleSlider} className={styles.MenuIcon}
            />

            <div
                className={`${styles.Slider}  ${isOpen ? styles.Open : ''}`}
            >
                <div className={styles.SliderContent}>
                    <IoCloseSharp
                        onClick={toggleSlider} className={styles.CloseIcon}
                    />

                    {
                        NavLinks.map((I) => (
                            <div key={I.LinkTo} className={styles.Normal}>
                                <Link href={I.LinkTo}>{I.LinkText}</Link>
                            </div>
                        ))
                    }
                    {
                        NavLinkNormal.map((I) => (
                            <div key={I.LinkTo} className={styles.Normal}>
                                <Link href={I.LinkTo}>{I.LinkText}</Link>
                            </div>
                        ))
                    }

                </div>
            </div>





        </nav>
    )
}
