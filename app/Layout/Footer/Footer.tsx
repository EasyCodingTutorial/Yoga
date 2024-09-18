import React from 'react'

import styles from './Footer.module.css'

import Link from 'next/link'
const GetHelp = [
    {
        LinkText: "Privacy",
        LinkTo: " "
    },
    {
        LinkText: "T&C",
        LinkTo: " "
    },
    {
        LinkText: "Support",
        LinkTo: " "
    },
    {
        LinkText: "Disclaimer",
        LinkTo: ""
    }
];

const Information = [
    {
        LinkText: "About",
        LinkTo: " "
    },
    {
        LinkText: "Blog",
        LinkTo: " "
    },
    {
        LinkText: "Careers",
        LinkTo: " "
    },
    {
        LinkText: "Contact Us",
        LinkTo: " "
    }
];

const CustomerService = [
    {
        LinkText: "News",
        LinkTo: " "
    },
    {
        LinkText: "Legal Notice",
        LinkTo: " "
    },
    {
        LinkText: "Become Instructor",
        LinkTo: ""
    }
];

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterRow}>
                <div>
                    <img src="/assets/logo.png" alt="" />
                </div>


                <div>
                    <h6>Get Help</h6>
                    {
                        GetHelp.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Information</h6>
                    {
                        Information.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>


                <div>
                    <h6>Customer Services</h6>
                    {
                        CustomerService.map((I: any) => (
                            <div key={I.LinkText} className={styles.LinkText}>
                                <Link href={I.LinkTo}>👉 {I.LinkText}</Link>
                            </div>
                        ))
                    }
                </div>

            </div>


            <div className={styles.FooterRow1}>
                <p>Copyright © 2024. All Rights Reserved</p>
            </div>


        </footer>
    )
}
