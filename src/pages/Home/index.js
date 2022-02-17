import React, {useEffect, useState} from 'react';

import api from '../../api';
import MvRow from '../../components/MvRow';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './home.css';

export default function Home() {
    const [movieList, setMovieList] = useState([]);
    const [ptHeader, setPtHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await api.getHomeList();
            setMovieList(list);
        }

        loadAll();
    }, []);

    useEffect(() => {
        const onScroll = () => {setPtHeader(window.scrollY > 100)}

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <div className="home">
            <Header back={ptHeader} />

            <div style={{height: '200px'}}></div>
            
            <section className='list'>
                {movieList.map((item, key) => (
                    <MvRow key={key} title={item.title} items={item.items} />
                ))}
            </section>
            
            <Footer />

            {movieList.length <= 0 &&
                <div className='loading'>
                    <img src='https://monophy.com/media/N256GFy1u6M6Y/monophy.gif' alt='loading' />
                </div>
            }
        </div>
      )
}