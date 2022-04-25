import Virus from '../../../StylesSheets/VirusModal.css';
import Modals from '../../../StylesSheets/Modals.css'
import Swal from 'sweetalert2'
import $ from 'jquery'
import React from 'react';

const VirusModal = () => {

    function closeModal() {
        $(`#${Virus.Modal}`).fadeOut(250)
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            popup: 'SwalPopupDark',
        }
       // timerProgressBar: true,
      })

    function changeOriginal() {
        localStorage.setItem("virusType", "virus_original");
        Toast.fire({
            icon: 'info',
            title: `Original virus selected.`
          })
    }

    function changeBlue() {
        localStorage.setItem("virusType", "virus_blue");
        Toast.fire({
            icon: 'info',
            title: `Blue virus selected.`
          })
    }

    function changeGreen() {
        localStorage.setItem("virusType", "virus_green");
        Toast.fire({
            icon: 'info',
            title: `Green virus selected.`
          })
    }

    function changeOrange() {
        localStorage.setItem("virusType", "virus_orange");
        Toast.fire({
            icon: 'info',
            title: `Orange virus selected.`
          })
    }

    function changePink() {
        localStorage.setItem("virusType", "virus_pink");
        Toast.fire({
            icon: 'info',
            title: `Pink virus selected.`
          })
    }

    function changePurple() {
        localStorage.setItem("virusType", "virus_purple");
        Toast.fire({
            icon: 'info',
            title: `Purple virus selected.`
          })
    }

    function changeYellow() {
        localStorage.setItem("virusType", "virus_yellow");
        Toast.fire({
            icon: 'info',
            title: `Yellow virus selected.`
          })
    }

    return (
        <div id={Virus.Modal} className={Modals.Modal} style={{display: "none"}}>
            <span onClick={closeModal} className={Virus.CloseButton}>
            <i className="fa-solid fa-xmark"></i>
            </span>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_original.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Original VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changeOriginal}>Choose</button>
                    </div>
                </div>
            </div>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_blue.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Blue VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changeBlue}>Choose</button>
                    </div>
                </div>
            </div>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_green.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Green VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changeGreen}>Choose</button>
                    </div>
                </div>
            </div>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_orange.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Orange VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changeOrange}>Choose</button>
                    </div>
                </div>
            </div>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_pink.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Pink VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changePink}>Choose</button>
                    </div>
                </div>
            </div>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_purple.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Purple VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changePurple}>Choose</button>
                    </div>
                </div>
            </div>

            <div className={Virus.VirusCard}>
                <div className={Virus.VirusCardImage}>
                    <img alt='skin' src='/images/Virus/virus_yellow.png'></img>
                </div>
                <div className={Virus.VirusCardDescription}>
                    <div className={Virus.VirusCardName}>
                        Yellow VIRUS
                    </div>
                    <div className={Virus.VirusCardButton}>
                        <button className={Virus.VirusCardbuttonBuy} onClick={changeYellow}>Choose</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export { VirusModal }