import PropTypes from "prop-types";
import styles from "./FriendList.module.css"

export const FriendList = ({ friends,children}) => {

    return (
        <>
            <ul className="friend-list">
                <FriendListItem
                    avatar={friends[0].avatar} />
            </ul>
        </>
    );


};

 export  const FriendListItem = ({friends,avatar,name,isOnline}) => {
return(
<li className="item">
    <span className="status">{isOnline }</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className={name}></p>
</li>
)
}