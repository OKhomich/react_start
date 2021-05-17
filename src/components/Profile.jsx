import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
    <main className={styles.content}>
            <div>
                <img className={styles.profile_pic} src="https://under35.me/wp-content/uploads/2016/09/%D0%9F%D0%B0%D1%80%D0%BA-%D1%80%D0%B0%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D0%94%D1%83%D0%B1%D0%B0%D0%B8-IMG-Worlds-of-Adventure-14.jpg" alt="img" />
            </div>
            <div>
                avatar+info
            </div>
            <div>
                post form
            </div>
            <div className={styles.posts}>
                <div className={styles.item}>
                    post1
                </div>
                <div className={styles.item}>
                    post 2
                </div>
            </div>
        </main>
    )
}

export default Profile;