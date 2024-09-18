import React from 'react'


import styles from './OurClasses.module.css'

// For Data
import { ClassData } from '@/static/classData'


// For Components
import { Content } from '@/Components/Content/Content'
import { Box } from '@/Components/Box/Box'


export const OurClasses = () => {
    return (
        <div className={styles.Classes}>
            <Content
                h6Text='Our Classes'
            />

            <div className={styles.ClassRow}>
                {
                    ClassData.map((I) => (
                        <Box
                            Id={I.id}
                            ImgUrl={I.classImg}
                            ImgAlt={I.className}
                            h6Text={I.className}
                            pText={I.classDesc}
                        />
                    ))
                }
            </div>

        </div>
    )
}
