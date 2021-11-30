import React from 'react';
import './Filter.styles.scss';

const Filter = ({setFilterMode}) => {
    return (
        <div className='filter'>
            <button value='Filter > 0' className='positive_btn' 
            onClick={() => setFilterMode('positive')}
            >
                Filter &gt; 0
            </button>
            <button value='All' className='all_btn'
                onClick={() => setFilterMode('all')}
            >
                All
            </button>
            <button value='Filter < 0' className='negative_btn'
                onClick={() => setFilterMode('negative')}
            >
                Filter &lt; 0
            </button>
        </div>
    )
};

export default Filter;
