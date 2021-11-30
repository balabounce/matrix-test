import React from 'react';
import './Matrix.styles.scss';

const Matrix = ({matrix, filterMode}) => {
    
    return (
        <div className='container'>
            {
                matrix.map((elem, i)=> {
                    let brightness = Math.abs(elem) + 10;
                    let bgColor = '';
                    elem > 5 
                        ? bgColor = 'rgb(65, 188, 156)'
                        : elem < -5 
                            ? bgColor = 'rgb(191, 11, 27)'
                            : bgColor = 'rgb(21, 24, 32)';
                    if(filterMode === 'negative' && elem > 0) return <div className='cell_container' key={i}/>
                        else if(filterMode === 'positive' && elem < 0) return <div className='cell_container' key={i}/>
                    return <div className='cell_container' key={i}>
                        <div className='cell' 
                            style={{backgroundColor:`${bgColor}`, 
                            filter: `brightness(${brightness}%)`}}>
                        </div>
                        <span>{elem}</span>
                    </div>
                })
            }
        </div>
    );
}

export default Matrix;
