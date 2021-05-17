import React from 'react';
import styles from './UserPosts.module.css';

const Post = () => {
    return (
        <div className={styles.item}>
                    <div className={styles.post_pic}></div>
                    <p>Hi, I hope on big progres in react</p>
                </div>
    )
}

const UserPosts = () => {
    return (
        <section>
            <h3>
                My posts
            </h3>
            <textarea className={styles.textarea} placeholder="your news..."></textarea>
            <input className={styles.send_post} type="submit" value="send" />

            <div className={styles.posts}>
                <Post />
                <Post />
                <Post />
                
        
            </div>
        </section>
    )
}

export default UserPosts;