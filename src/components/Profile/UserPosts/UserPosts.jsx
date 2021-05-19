import React from 'react';
import styles from './UserPosts.module.css';

import Post from './Post/Post';

const UserPosts = () => {
    return (
        <section>
            <h3>
                My posts
            </h3>
            <textarea className={styles.textarea} placeholder="your news..."></textarea>
            <input className={styles.send_post} type="submit" value="send" />

            <div className={styles.posts}>
                <Post likes='10' message="Hi, I am learning 16 lesson's" />
                <Post likes='6' message="Hi, I hope on big progres in react" />
                <Post likes='3'  message="Hello, it is my first post" />
            </div>
        </section>
    )
}

export default UserPosts;