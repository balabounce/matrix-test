import React from 'react';
import { Header } from '../components';
import { Matrix } from '../components';
import { Filter } from '../components';

const Main = () => {
    const [matrix, setMatrix] = React.useState([]);
    const [filterMode, setFilterMode] = React.useState('all')

    React.useEffect(() => {
        const matrixArray = [];
        while (matrixArray.length !== 169) {
            matrixArray.push(Math.round(Math.random() * (100 + 100) - 100));
        };
        setMatrix(matrixArray);
    }, []);

    return (
        <div className='main'>
            <Header/> 
            <Matrix matrix={matrix} filterMode={filterMode}/>
            <Filter setFilterMode={setFilterMode}/>
        </div>
    );
};

export default Main;
