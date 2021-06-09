import React from 'react';

import CardKevinPowerll1 from '../../Components/Cards/Card-Kevin-Powell-1';
import styles from './index.module.css';

function Cards(){
    return(
        <>
            <h1>Here are some cards</h1>
            <div className={styles.container}>
                <CardKevinPowerll1 />
            </div>
        </>
    );
}

export default Cards;
