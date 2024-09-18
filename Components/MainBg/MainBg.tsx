import React from 'react'

import styles from './MainBg.module.css'

// For Components
import { Button } from '../button/button'

interface MainBgProps {
    ImgUrl: string,
    ImgAlt?: string,
    h6Text: string,
    h5Text: string,
    LinkText: string,
    LinkTo: string,
}

export const MainBg = (
    {
        ImgUrl,
        ImgAlt,
        h6Text,
        h5Text,
        LinkText,
        LinkTo
    }: MainBgProps
) => {
    return (
        <div className={styles.MainBg}>
            <div>
                <div>
                    <img src={ImgUrl} alt={ImgAlt} />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>{h6Text}</h6>
                <h5>{h5Text}</h5>
                <Button
                    LinkText={LinkText}
                    LinkTo={LinkTo}
                />
            </div>
        </div>
    )
}
