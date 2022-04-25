/*  eslint-disable */

import Axios from 'axios';
import $ from 'jquery';
import TSprofile from '../../StylesSheets/Profile.module.css';

const token = localStorage.getItem('token');
Axios.get('http://api.triplesplitio.ml/users/me', {
    headers: {
        "Authorization": "bearer" + token
    }
})
.then((response) => {
    /* Level 1 */
                // eslint-disable-next-line
                if(response.data.xp == 10) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 20) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 30) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 40) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 50) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 60) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 70) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 80) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 90) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 1");
                }
                if(response.data.xp == 100) {
                    $(`#${TSprofile.Level}`).text("LVL 2"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }

                /* Level 2 */

                if(response.data.xp == 110) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 120) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 130) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 140) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 150) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 160) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 170) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 180) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 190) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 2");
                }
                if(response.data.xp == 200) {
                    $(`#${TSprofile.Level}`).text("LVL 3"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }        

                /* Level 3 */

                if(response.data.xp == 210) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 220) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 230) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 240) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 250) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 260) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 270) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 280) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 290) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 3");
                }
                if(response.data.xp == 300) {
                    $(`#${TSprofile.Level}`).text("LVL 4"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }

                 /* Level 4 */

                 if(response.data.xp == 310) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 320) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 330) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 340) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 350) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 360) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 370) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 380) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 390) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 4");
                }
                if(response.data.xp == 400) {
                    $(`#${TSprofile.Level}`).text("LVL 5"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }

                 /* Level 5 */

                 if(response.data.xp == 410) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 420) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 430) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 440) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 450) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 460) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 470) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 480) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 490) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 5");
                }
                if(response.data.xp == 500) {
                    $(`#${TSprofile.Level}`).text("LVL 6"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }

                 /* Level 6 */

                 if(response.data.xp == 510) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 520) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 530) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 540) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 550) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 560) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 570) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 580) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 590) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 6");
                }
                if(response.data.xp == 600) {
                    $(`#${TSprofile.Level}`).text("LVL 7"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }
            
                 /* Level 7 */

                 if(response.data.xp == 610) {
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 620) {
                    $(`.${TSprofile.XPProgress}`).css("width", "40px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 630) {
                    $(`.${TSprofile.XPProgress}`).css("width", "90px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 640) {
                    $(`.${TSprofile.XPProgress}`).css("width", "110px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 650) {
                    $(`.${TSprofile.XPProgress}`).css("width", "130px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 660) {
                    $(`.${TSprofile.XPProgress}`).css("width", "160px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 670) {
                    $(`.${TSprofile.XPProgress}`).css("width", "190px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 680) {
                    $(`.${TSprofile.XPProgress}`).css("width", "220px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                }
                if(response.data.xp == 690) {
                    $(`.${TSprofile.XPProgress}`).css("width", "250px");
                    $(`#${TSprofile.Level}`).text("LVL 7");
                } 
                if(response.data.xp == 700) {
                    $(`#${TSprofile.Level}`).text("LVL 8"); /* Next level */ 
                    $(`.${TSprofile.XPProgress}`).css("width", "15px");
                }

                /* Level 8 */

if (response.data.xp == 710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 8');
  }
  if (response.data.xp == 800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  
  /* Level 9 */
  
  if (response.data.xp == 810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 9');
  }
  if (response.data.xp == 900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  
  /* Level 10 */
  
  if (response.data.xp == 910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 10');
  }
  if (response.data.xp == 1000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  
  /* Level 11 */
  
  if (response.data.xp == 1010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 11');
  }
  if (response.data.xp == 1100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  
  /* Level 12 */
  
  if (response.data.xp == 1110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 12');
  }
  if (response.data.xp == 1200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  
  /* Level 13 */
  
  if (response.data.xp == 1210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 13');
  }
  if (response.data.xp == 1300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  
  /* Level 14 */
  
  if (response.data.xp == 1310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 14');
  }
  if (response.data.xp == 1400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  
  /* Level 15 */
  
  if (response.data.xp == 1410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 15');
  }
  if (response.data.xp == 1500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  
  /* Level 16 */
  
  if (response.data.xp == 1510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 16');
  }
  if (response.data.xp == 1600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  
  /* Level 17 */
  
  if (response.data.xp == 1610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 17');
  }
  if (response.data.xp == 1700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  
  /* Level 18 */
  
  if (response.data.xp == 1710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 18');
  }
  if (response.data.xp == 1800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  
  /* Level 19 */
  
  if (response.data.xp == 1810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 19');
  }
  if (response.data.xp == 1900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  
  /* Level 20 */
  
  if (response.data.xp == 1910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 1990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 20');
  }
  if (response.data.xp == 2000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  
  /* Level 21 */
  
  if (response.data.xp == 2010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 21');
  }
  if (response.data.xp == 2100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  
  /* Level 22 */
  
  if (response.data.xp == 2110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 22');
  }
  if (response.data.xp == 2200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  
  /* Level 23 */
  
  if (response.data.xp == 2210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 23');
  }
  if (response.data.xp == 2300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  
  /* Level 24 */
  
  if (response.data.xp == 2310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 24');
  }
  if (response.data.xp == 2400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  
  /* Level 25 */
  
  if (response.data.xp == 2410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 25');
  }
  if (response.data.xp == 2500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  
  /* Level 26 */
  
  if (response.data.xp == 2510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 26');
  }
  if (response.data.xp == 2600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  
  /* Level 27 */
  
  if (response.data.xp == 2610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 27');
  }
  if (response.data.xp == 2700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  
  /* Level 28 */
  
  if (response.data.xp == 2710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 28');
  }
  if (response.data.xp == 2800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  
  /* Level 29 */
  
  if (response.data.xp == 2810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 29');
  }
  if (response.data.xp == 2900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  
  /* Level 30 */
  
  if (response.data.xp == 2910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 2990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 30');
  }
  if (response.data.xp == 3000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  
  /* Level 31 */
  
  if (response.data.xp == 3010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 31');
  }
  if (response.data.xp == 3100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  
  /* Level 32 */
  
  if (response.data.xp == 3110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 32');
  }
  if (response.data.xp == 3200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  
  /* Level 33 */
  
  if (response.data.xp == 3210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 33');
  }
  if (response.data.xp == 3300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  
  /* Level 34 */
  
  if (response.data.xp == 3310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 34');
  }
  if (response.data.xp == 3400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  
  /* Level 35 */
  
  if (response.data.xp == 3410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 35');
  }
  if (response.data.xp == 3500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  
  /* Level 36 */
  
  if (response.data.xp == 3510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 36');
  }
  if (response.data.xp == 3600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  
  /* Level 37 */
  
  if (response.data.xp == 3610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 37');
  }
  if (response.data.xp == 3700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  
  /* Level 38 */
  
  if (response.data.xp == 3710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 38');
  }
  if (response.data.xp == 3800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  
  /* Level 39 */
  
  if (response.data.xp == 3810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 39');
  }
  if (response.data.xp == 3900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  
  /* Level 40 */
  
  if (response.data.xp == 3910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 3990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 40');
  }
  if (response.data.xp == 4000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  
  /* Level 41 */
  
  if (response.data.xp == 4010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 41');
  }
  if (response.data.xp == 4100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  
  /* Level 42 */
  
  if (response.data.xp == 4110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 42');
  }
  if (response.data.xp == 4200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  
  /* Level 43 */
  
  if (response.data.xp == 4210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 43');
  }
  if (response.data.xp == 4300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  
  /* Level 44 */
  
  if (response.data.xp == 4310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 44');
  }
  if (response.data.xp == 4400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  
  /* Level 45 */
  
  if (response.data.xp == 4410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 45');
  }
  if (response.data.xp == 4500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  
  /* Level 46 */
  
  if (response.data.xp == 4510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 46');
  }
  if (response.data.xp == 4600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  
  /* Level 47 */
  
  if (response.data.xp == 4610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 47');
  }
  if (response.data.xp == 4700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  
  /* Level 48 */
  
  if (response.data.xp == 4710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 48');
  }
  if (response.data.xp == 4800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  
  /* Level 49 */
  
  if (response.data.xp == 4810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  
  /* Level 49 */
  
  if (response.data.xp == 4910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 4990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 49');
  }
  if (response.data.xp == 5000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  
  /* Level 50 */
  
  if (response.data.xp == 5010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 50');
  }
  if (response.data.xp == 5100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  
  /* Level 51 */
  
  if (response.data.xp == 5110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 51');
  }
  if (response.data.xp == 5200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  
  /* Level 52 */
  
  if (response.data.xp == 5210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 52');
  }
  if (response.data.xp == 5300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  
  /* Level 53 */
  
  if (response.data.xp == 5310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 53');
  }
  if (response.data.xp == 5400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 54');
  }
  
  /* Level 55 */
  
  if (response.data.xp == 5510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 55');
  }
  if (response.data.xp == 5600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  
  /* Level 56 */
  
  if (response.data.xp == 5610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 56');
  }
  if (response.data.xp == 5700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  
  /* Level 57 */
  
  if (response.data.xp == 5710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 57');
  }
  if (response.data.xp == 5800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  
  /* Level 58 */
  
  if (response.data.xp == 5810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 58');
  }
  if (response.data.xp == 5900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  
  /* Level 59 */
  
  if (response.data.xp == 5910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 5990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 59');
  }
  if (response.data.xp == 6000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  
  /* Level 60 */
  
  if (response.data.xp == 6010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  
  /* Level 61 */
  
  if (response.data.xp == 6110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 61');
  }
  if (response.data.xp == 6200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  
  /* Level 62 */
  
  if (response.data.xp == 6210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 62');
  }
  if (response.data.xp == 6300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  
  /* Level 60=3 */
  
  if (response.data.xp == 6310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 63');
  }
  if (response.data.xp == 6400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  
  /* Level 64 */
  
  if (response.data.xp == 6410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 60430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 64');
  }
  if (response.data.xp == 6500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  
  /* Level 65 */
  
  if (response.data.xp == 6510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 65');
  }
  if (response.data.xp == 6600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  
  /* Level 66 */
  
  if (response.data.xp == 6610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 66');
  }
  if (response.data.xp == 6700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  
  /* Level 67 */
  
  if (response.data.xp == 6710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 67');
  }
  if (response.data.xp == 6800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  
  /* Level 68 */
  
  if (response.data.xp == 6810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 60');
  }
  if (response.data.xp == 6840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 68');
  }
  if (response.data.xp == 6900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  
  /* Level 69 */
  
  if (response.data.xp == 6910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 6990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 69');
  }
  if (response.data.xp == 7000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  
  /* Level 70 */
  
  if (response.data.xp == 7010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 70');
  }
  if (response.data.xp == 7100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  
  /* Level 71 */
  
  if (response.data.xp == 7110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 71');
  }
  if (response.data.xp == 7200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  
  /* Level 72 */
  
  if (response.data.xp == 7210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 72');
  }
  if (response.data.xp == 7300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  
  /* Level 73 */
  
  if (response.data.xp == 7310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 73');
  }
  if (response.data.xp == 7400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  
  /* Level 74 */
  
  if (response.data.xp == 7410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 74');
  }
  if (response.data.xp == 7500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  
  /* Level 75 */
  
  if (response.data.xp == 7510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 75');
  }
  if (response.data.xp == 7600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  
  /* Level 76 */
  
  if (response.data.xp == 7610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 76');
  }
  if (response.data.xp == 7400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  
  /* Level 77 */
  
  if (response.data.xp == 7710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 77');
  }
  if (response.data.xp == 7800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  
  /* Level 78 */
  
  if (response.data.xp == 7810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 78');
  }
  if (response.data.xp == 7900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  
  /* Level 79 */
  
  if (response.data.xp == 7910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 7990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 79');
  }
  if (response.data.xp == 8000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  
  /* Level 80 */
  
  if (response.data.xp == 8010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 80');
  }
  if (response.data.xp == 8100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  
  /* Level 81 */
  
  if (response.data.xp == 8110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 81');
  }
  if (response.data.xp == 8200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  
  /* Level 82 */
  
  if (response.data.xp == 8210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 82');
  }
  if (response.data.xp == 8300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  
  /* Level 83 */
  
  if (response.data.xp == 8310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 83');
  }
  if (response.data.xp == 8400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  
  /* Level 84 */
  
  if (response.data.xp == 8410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 84');
  }
  if (response.data.xp == 8500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  
  /* Level 85 */
  
  if (response.data.xp == 8510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 85');
  }
  if (response.data.xp == 8600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  
  /* Level 86 */
  
  if (response.data.xp == 8610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 86');
  }
  if (response.data.xp == 8700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  
  /* Level 87 */
  
  if (response.data.xp == 8710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 87');
  }
  if (response.data.xp == 8800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  
  /* Level 88 */
  
  if (response.data.xp == 8810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 88');
  }
  if (response.data.xp == 8900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  
  /* Level 89 */
  
  if (response.data.xp == 8910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 8990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 89');
  }
  if (response.data.xp == 9000) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  
  /* Level 90 */
  
  if (response.data.xp == 9010) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9020) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9030) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9040) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9050) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9060) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9070) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9080) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9090) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9100) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  
  /* Level 91 */
  
  if (response.data.xp == 9110) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9120) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9130) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9140) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9150) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9160) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9170) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9180) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9190) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 91');
  }
  if (response.data.xp == 9200) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  
  /* Level 92 */
  
  if (response.data.xp == 9210) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9220) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9230) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9240) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9250) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9260) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9270) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9280) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9290) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 92');
  }
  if (response.data.xp == 9300) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  
  /* Level 93 */
  
  if (response.data.xp == 9310) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9320) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9330) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9340) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9350) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9360) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9370) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9380) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9390) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 93');
  }
  if (response.data.xp == 9400) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  
  /* Level 94 */
  
  if (response.data.xp == 9410) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9420) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9430) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9440) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9450) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9460) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9470) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9480) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9490) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 94');
  }
  if (response.data.xp == 9500) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  
  /* Level 95 */
  
  if (response.data.xp == 9510) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9520) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9530) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9540) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9550) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9560) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9570) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9580) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9590) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 95');
  }
  if (response.data.xp == 9600) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  
  /* Level 96 */
  
  if (response.data.xp == 9610) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9620) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9630) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9640) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9650) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9660) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9670) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9680) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9690) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 96');
  }
  if (response.data.xp == 9700) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  
  /* Level 97 */
  
  if (response.data.xp == 9710) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9720) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9730) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9740) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9750) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9760) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9770) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9780) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9790) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 97');
  }
  if (response.data.xp == 9800) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  
  /* Level 98 */
  
  if (response.data.xp == 9810) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9820) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9830) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9840) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9850) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9860) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9870) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9880) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9890) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 98');
  }
  if (response.data.xp == 9900) {
    $(`.${TSprofile.XPProgress}`).css("width", "15px"); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  
  /* Level 99 */
  
  if (response.data.xp == 9910) {
    $(`.${TSprofile.XPProgress}`).css('width', '15px');
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9920) {
    $(`.${TSprofile.XPProgress}`).css("width", "40px");
    $(`#${TSprofile.Level}`).text('LVL 90');
  }
  if (response.data.xp == 9930) {
    $(`.${TSprofile.XPProgress}`).css("width", "90px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9940) {
    $(`.${TSprofile.XPProgress}`).css("width", "110px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9950) {
    $(`.${TSprofile.XPProgress}`).css("width", "130px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9960) {
    $(`.${TSprofile.XPProgress}`).css("width", "160px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9970) {
    $(`.${TSprofile.XPProgress}`).css("width", "190px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9980) {
    $(`.${TSprofile.XPProgress}`).css("width", "220px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 9990) {
    $(`.${TSprofile.XPProgress}`).css("width", "250px");
    $(`#${TSprofile.Level}`).text('LVL 99');
  }
  if (response.data.xp == 10000) {
    $(`.${TSprofile.XPProgress}`).css('width', '265px'); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 100');
  }
  
  /* Level 100 forever */
  
  if (response.data.xp > 10000) {
    $(`.${TSprofile.XPProgress}`).css('width', '265px'); /* Next Level */
    $(`#${TSprofile.Level}`).text('LVL 100');
  }
})