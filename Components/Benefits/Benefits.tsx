import React from 'react'

import styles from './Benefits.module.css'
import { Content } from '../Content/Content'

export const Benefits = () => {
    return (
        <div className={styles.Benefits}>

            <Content
                h6Text="Why You  Need To Join Us!"
            />

            <div className={styles.Parent}>
                <div className={styles.child}>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2023/07/13/18/44/mindfulness-8125522_640.jpg" alt="" />
                    </div>
                </div>

                <div className={styles.child}>
                    <h6>Feel Better, Live Better</h6>
                    <p>
                        Practicing yoga regularly at Easy Yoga helps improve not just physical strength but also mental well-being. Yoga enhances flexibility, balance, and muscle tone, promoting a healthier and stronger body. With time, your posture improves, and common aches and pains diminish, making everyday movements more comfortable. Beyond the physical benefits, yoga reduces stress and anxiety, enabling you to navigate life’s challenges with ease. By combining mindful breathing and controlled movements, it offers a perfect way to connect the mind and body, leaving you feeling rejuvenated and revitalized. With Easy Yoga, you can truly feel better and live better!
                    </p>
                </div>

            </div>

            <div className={styles.Parent}>

                <div className={styles.child}>
                    <h6>Stress Less, Smile More</h6>
                    <p>
                        In today’s fast-paced world, stress can take a toll on your mental health. Easy Yoga provides a sanctuary for those looking to unwind and recharge. Through a variety of relaxing poses and meditative practices, yoga helps reduce cortisol levels, the hormone responsible for stress. You’ll discover a sense of calm as you practice, gaining the tools to manage day-to-day stress more effectively. Additionally, yoga boosts your mood by increasing the production of endorphins, the “feel-good” hormones. This leads to a more positive outlook on life, helping you stress less and smile more, both on and off the mat.
                    </p>
                </div>


                <div className={styles.child}>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2023/05/15/16/44/ai-generated-7995511_1280.png" alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}
