import Shop from '../../StylesSheets/ShopModal.css';
import axios from 'axios';
import React from 'react';
import $ from 'jquery';

const ShopCoinsTab = () => {
//document.cookie = 'Authorization=' + token + '; path=/' + '; Secure=true';
    function payfirstoffer() {
        const token = localStorage.getItem("bublex-token");
        axios.post('http://localhost:5100/posttoken', {
            userToken: JSON.stringify(token)
        })
    }

    return (
        <div id={Shop.CoinsTab}>
            <div id={Shop.skinCard}>
                <div className={Shop.skinCardImage}>
                    <img src="./images/coin.png" className={Shop.CoinImage} />
                </div>
                <div className={Shop.skinCardDescription}>
                    <div className={Shop.skinCardName}>
                        <p>5.000 Coins</p>
                    </div> 
                    <form action="http://localhost:5100/buy/1" method="POST">
                        <button type="submit" onClick={payfirstoffer} className={Shop.skinCardBuyButton}>4.99 €</button>
                    </form>
                </div>
            </div>

            <div id={Shop.skinCard}>
                <div className={Shop.skinCardImage}>
                    <img src="./images/coin.png" className={Shop.CoinImage} />
                </div>
                <div className={Shop.skinCardDescription}>
                    <div className={Shop.skinCardName}>
                        <p>12.500 Coins</p>
                    </div>
                    <form action="https://payment.bublex.io/buy/2" method="POST">
                        <button onClick={payfirstoffer} className={Shop.skinCardBuyButton}>9.99 €</button>
                    </form>
                </div>
            </div>

            <div id={Shop.skinCard}>
                <div className={Shop.skinCardImage}>
                    <img src="./images/coin.png" className={Shop.CoinImage} />
                </div>
                <div className={Shop.skinCardDescription}>
                    <div className={Shop.skinCardName}>
                        <p>20.000 Coins</p>
                    </div>
                    <form action="https://payment.bublex.io/buy/3" method="POST">
                        <button onClick={payfirstoffer} className={Shop.skinCardBuyButton}>14.99 €</button>
                    </form>
                </div>
            </div>

            <div id={Shop.skinCard}>
                <div className={Shop.skinCardImage}>
                    <img src="./images/coin.png" className={Shop.CoinImage} />
                </div>
                <div className={Shop.skinCardDescription}>
                    <div className={Shop.skinCardName}>
                        <p>30.000 Coins</p>
                    </div>
                    <form action="https://payment.bublex.io/buy/4" method="POST">
                        <button onClick={payfirstoffer} className={Shop.skinCardBuyButton}>19.99 €</button>
                    </form>
                </div>
            </div>

            <div id={Shop.skinCard}>
                <div className={Shop.skinCardImage}>
                    <img src="./images/coin.png" className={Shop.CoinImage} />
                </div>
                <div className={Shop.skinCardDescription}>
                    <div className={Shop.skinCardName}>
                        <p>90.000 Coins</p>
                    </div>
                    <form action="https://payment.bublex.io/buy/5" method="POST">
                        <button onClick={payfirstoffer} className={Shop.skinCardBuyButton}>49.99 €</button>
                    </form>
                </div>
            </div>

            <div id={Shop.skinCard}>
                <div className={Shop.skinCardImage}>
                    <img src="./images/coin.png" className={Shop.CoinImage} />
                </div>
                <div className={Shop.skinCardDescription}>
                    <div className={Shop.skinCardName}>
                        <p>250.000 Coins</p>
                    </div>
                    <form action="https://payment.bublex.io/buy/6" method="POST">
                        <button onClick={payfirstoffer} className={Shop.skinCardBuyButton}>99.99 €</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { ShopCoinsTab }