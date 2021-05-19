import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
                    <div className={styles.post_pic}></div>
                    <p>{props.message}</p>
                    <span>Like: {props.likes}</span>
                </div>
    )
}

export default Post;