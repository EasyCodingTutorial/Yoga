import React from 'react'

import styles from './ShopNow.module.css'

// For Data
import { ShopItems } from '@/static/shopData'


// For Components
import { Content } from '@/Components/Content/Content'
import { Box } from '@/Components/Box/Box'

export const ShopNow = () => {
    return (
        <div className={styles.ShopNow}>
            <Content
                h6Text='Shop Now'
            />

            <div className={styles.ShopNowRow}>
                {
                    ShopItems.map((I) => (
                        <Box
                            Id={I.id}
                            ImgUrl={I.imgUrl}
                            ImgAlt={I.name}
                            h6Text={I.name}
                            pText={I.desc}
                            price={I.price}
                        />
                    ))
                }
            </div>

        </div>
    )
}
