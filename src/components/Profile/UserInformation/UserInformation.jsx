import React from 'react';
import styles from './UserInformation.module.css';

const UserInformation = () => {
    return (
    <section>
            <div>
                <img className={styles.profile_pic} src="https://under35.me/wp-content/uploads/2016/09/%D0%9F%D0%B0%D1%80%D0%BA-%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D0%94%D1%83%D0%B1%D0%B0%D0%B8-IMG-Worlds-of-Adventure-14.jpg" alt="img" />
            </div>
            <div className={styles.info_wrap}>
                <img className={styles.avatar_pic} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl4AVsKJzOt1-1jYsOu-6bGc7yzvopAo6T8WI53203lV-_DMAjGFFRfXKg3PL6XJHvTA&usqp=CAU" alt='avatar' />
                <div>
                    <h3 className={styles.name}>Olga Kh</h3>
                    <ul className={styles.info}>
                        <li>Date of bithday: 14 july</li>
                        <li>City: Dnipro</li>
                        <li>Education: DNU'06</li>
                        <li>Web site:</li>
                    </ul>
                </div>
            </div>
    </section>
    )
}

export default UserInformation;