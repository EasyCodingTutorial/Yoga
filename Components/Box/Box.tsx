import React from 'react'

import styles from './Box.module.css'


interface BoxProps {
    Id: number,
    ImgUrl: string,
    ImgAlt?: string,
    h6Text: string,
    pText: string,
    price?: number,
}

export const Box = (
    {
        Id, ImgUrl, ImgAlt, h6Text, pText, price
    }: BoxProps
) => {
    return (
        <div className={styles.Box} key={Id}>
            <img src={ImgUrl} alt={ImgAlt} />
            <div className={styles.BoxContent}>

                {
                    price && (
                        <strong className={styles.price}><span>Price: </span>₹ {price}</strong>
                    )
                }

                <h6>{h6Text}</h6>
                <p>
                    {pText}
                </p>
            </div>
        </div>
    )
}
