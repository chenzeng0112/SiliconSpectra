import React, { Component } from 'react';
import './ImgSlide.css';

export default class ImgSlide extends Component {
    render() {
        const { showSlide, searchImg } = this.props;
        return (
            <div className='imgSlide'>
                <input
                    type='number'
                    placeholder='SEARCH'
                    onKeyDown={(e) => searchImg(e)}
                    className='searchBox'
                />
                {showSlide()}
            </div>
        )
    }
}
