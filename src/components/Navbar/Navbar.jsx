import React from 'react';
import styles from './Navbar.module.css';

console.log(styles);
// styles = {
//   sidebar:'',
//   item:''
// }

const Navbar = () => {
    return (
      <nav className={styles.sidebar}>
        <ul>
          <li className={`${styles.item} ${styles.active}`}><a href="/">Profile</a></li>
          <li className={styles.item}><a href="/">Messages</a></li>
          <li className={styles.item}><a href="/">News</a></li>
          <li className={styles.item}><a href="/">Music</a></li>
        </ul>
        <div className={styles.item}>
          <a href="/">Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;