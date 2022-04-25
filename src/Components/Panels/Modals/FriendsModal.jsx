import Style from '../../../StylesSheets/FriendsModal.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import $ from 'jquery';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Friends } from '../../../Client/API/Friends';


const FriendsModal = () => {
    let API;
    const [FriendId, setFriendId] = useState("");
    function CloseFriendsModal() {
        $(`#${Style.Modal}`).fadeOut(250);
    }

    function openMyFriends() {
        $("#myFriendsBtn").addClass(`${Style.FriendsButtonActive}`);
        $("#friendRequestBtn").removeClass(`${Style.FriendsButtonActive}`);
        $("#addFriendBtn").removeClass(`${Style.FriendsButtonActive}`);
        $("#myFriends").show();
        $("#friendRequest").hide();
        $("#addFriend").hide();
        Friends.getMyFriends();
    }

    function openFriendRequest() {
        $("#myFriendsBtn").removeClass(`${Style.FriendsButtonActive}`);
        $("#friendRequestBtn").addClass(`${Style.FriendsButtonActive}`);
        $("#addFriendBtn").removeClass(`${Style.FriendsButtonActive}`);
        $("#myFriends").hide();
        $("#friendRequest").show();
        $("#addFriend").hide();
        Friends.getRequestsSentToMe();
    }

    function openAddFriend() {
        $("#myFriendsBtn").removeClass(`${Style.FriendsButtonActive}`);
        $("#friendRequestBtn").removeClass(`${Style.FriendsButtonActive}`);
        $("#addFriendBtn").addClass(`${Style.FriendsButtonActive}`);
        $("#myFriends").hide();
        $("#friendRequest").hide();
        $("#addFriend").show();
    }

    function sendFriendRequest() {
        const token = localStorage.getItem("bublex-token");
            $.ajax({
                type: "POST",
                url: `${API.baseURL}/friends/add`,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    toUser: FriendId
                },  
                success: function(data) {
                    //console.log(data)
                    new Swal({
                        title: data.message,
                        icon: "success",
                        customClass: {
                            popup: 'SwalPopupDark'
                        }
                    })
                },
                error: function(xhr, textStatus, errorThrown) {
                    new Swal({
                        title: xhr.responseJSON.message,
                        icon: "error",
                        customClass: {
                            popup: 'SwalPopupDark',
                        }
                    })
                }
            })
    }
    return (
        <div id={Style.Modal} style={{display: "none"}}>
            <button className={Style.closeButton} onClick={CloseFriendsModal}><i className="fa-solid fa-xmark"></i></button>
            <div className={Style.navBar}>
                <button id="myFriendsBtn" className={`${Style.FriendsButtons} ${Style.FriendsButtonActive}`} onClick={openMyFriends}>My Friends</button>
                <button id="friendRequestBtn" className={Style.FriendsButtons} onClick={openFriendRequest}>Friend Request</button>
                <button id="addFriendBtn" className={Style.FriendsButtons} onClick={openAddFriend}>Add Friend</button>
            </div>
            <div className={Style.Content}>
                <div id="myFriends">
                    <h2>My Friends</h2>
                    <div className={Style.FriendContent} id='myFriendsList'>
                    </div>
                </div>
                <div id="friendRequest" style={{display: "none"}}>
                    <h2>Friend Request</h2>
                    <div className={Style.FriendContent} id='myReuqestList'>
                    </div>
                </div>
                <div id="addFriend" style={{display: "none"}}>
                    <h2>Add Friend</h2>
                    <div className={Style.FriendContent}>
                        <input id={Style.addFriendInput} placeholder="User ID (Exemple: 1)" onChange={(e) => setFriendId(e.target.value)}  />
                        <button onClick={sendFriendRequest} className={Style.sendFriendButton}>Send Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FriendsModal }