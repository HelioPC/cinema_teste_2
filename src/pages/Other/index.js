import {IoIosHome} from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTheaterMasks, FaSyncAlt} from 'react-icons/fa';
import {RiSettings5Fill} from 'react-icons/ri';
import {BsPlusLg} from 'react-icons/bs';

import './other.css';

export default function Other() {
    return (
        <div className="other">
            <div className="wrapper">
                <div className="sidebar">
                    <ul>
                        <li className="mainIcon">
                            <a href="/">
                                <span className='icon'><IoIosHome color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className='icon'><GiHamburgerMenu color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className='icon'><FaTheaterMasks color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className='icon'><RiSettings5Fill color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className='icon'><FaSyncAlt color='#fff' size={26} /></span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span className='icon'><BsPlusLg color='#fff' size={26} /></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='upload'>
                <div className='upload-header'>
                    <h1>Upload Film</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <form className='upload-form'>
                    <h2>Film info</h2>
                    <div className='form-content-1'>
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

                    <div className='agreement-accept'>
                        <label style={{marginRight: '150px'}}>Agree</label>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
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