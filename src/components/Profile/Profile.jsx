import React from 'react';
import styles from './Profile.module.css';

import UserInformation from './UserInformation/UserInformation';
import UserPosts from './UserPosts/UserPosts';

const Profile = () => {
    return (
        <main className={styles.content}>
            <UserInformation />
            <UserPosts />
        </main>
    )
}

export default Profile;