import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({profile}) {
    
    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>

                <img className="rightbarAd" src="/assets/ad.png" alt="" />

                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                                    
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">Leeds</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Always in Love</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Demi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Demi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Demi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Demi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Demi</span>
                    </div>
                    
                </div>
            </>
        );
    }
    
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">    
                {profile ? <ProfileRightbar/> : <HomeRightbar/> }
            </div>
        </div>
    );
}
