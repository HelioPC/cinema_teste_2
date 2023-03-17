import {IoIosHome} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTheaterMasks, FaSyncAlt} from 'react-icons/fa';
import {RiSettings5Fill} from 'react-icons/ri';
import {BsPlusLg} from 'react-icons/bs';

import styles from './style.module.css';

export default function Other() {
    return (
        <div className={styles.other}>
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <ul>
                        <li className={styles.mainIcon}>
                            <a href="/">
                                <span className={styles.icon}><IoIosHome color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className={styles.icon}><GiHamburgerMenu color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className={styles.icon}><FaTheaterMasks color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className={styles.icon}><RiSettings5Fill color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className={styles.icon}><FaSyncAlt color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className={styles.icon}><BsPlusLg color='#fff' size={26} /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.upload}>
                <div className={styles.upload_header}>
                    <h1>Upload Film</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <form className={styles.upload_form}>
                    <h2>Film info</h2>
                    <div className={styles.form_content_1}>
                        <input type='text' placeholder='Film name' style={{marginRight: '25px'}} />

                        <input type='number' placeholder='Classification' />

                        <select name="select" style={{
                            width: '100%',
                            height: '30px',
                            background: 'transparent',
                            color: '#fff',
                            border: 'solid 1px #fff',
                            borderRadius: '5px'
                        }}>
                            <option value={0} style={{
                                display: 'none',
                                visibility: 'hidden',
                                paddingRight: '10px',
                            }}>Category</option>
                            <option value="netflix">Originais da netflix</option>
                            <option value="trending">Trending</option>
                            <option value="toprated">Top rated</option>
                            <option value="action">Ação</option>
                            <option value="comedy">Comédia</option>
                            <option value="romance">Romance</option>
                            <option value="horror">Terror</option>
                            <option value="documentary">Documentário</option>
                        </select>
                    </div>

                    <input type='text' placeholder='URL' style={{
                        marginTop: '30px',
                        width: '100%',
                        height: '30px'
                    }} />
                </form>

                <div style={{marginTop: '60px'}}>
                    <h2>Warning</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </div>

                    <div className={styles.agreement_accept}>
                        <label style={{marginRight: '150px'}}>Agree</label>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>

            <main style={{
                left: '100px',
                height: '100vh',
                width: '60%',
                position: 'relative',
            }}>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </main>
        </div>
      );
}