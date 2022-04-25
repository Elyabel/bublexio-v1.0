import Load from '../StylesSheets/Loading.css';
import React from 'react';

const Loading = () => {
    return (
        <div className={Load.loaderScreen}>
            <div className={Load.spinner}>
                <div className={Load.bounce1}></div>
                <div className={Load.bounce2}></div>
                <div className={Load.bounce3}></div>
            </div>
        </div>
    )
}

export { Loading }