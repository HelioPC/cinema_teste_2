import React, { useState } from "react";
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from 'react-icons/md';

import './MvRow.css';

export default function MvRow({title, items}){
    const [scrollX, setScrollX] = useState(-400);

    const swipeLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);

        setScrollX(x > 0 ? 0 : x);
    }
    const swipeRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        setScrollX((window.innerWidth - listW) > x ? window.innerWidth - listW - 60 : x);
    }

    return (
        <div className="mvrow">
            <h2>{title}</h2>
            <div className="mvrow-left" onClick={swipeLeft}>
                <MdOutlineNavigateBefore fontSize={50} />
            </div>
            <div className="mvrow-right" onClick={swipeRight}>
                <MdOutlineNavigateNext fontSize={50} />
            </div>

            <div className="mvrow-listarea">
                <div className="mvrow-list" style={{marginLeft: scrollX, width: items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="mvrow-item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}