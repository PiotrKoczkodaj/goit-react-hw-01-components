import PropTypes from "prop-types";
import styles from "./FriendList.module.css"

export const FriendList = ({ friends,children}) => {
    
    const render = friends.map((friend) => {
        return (
            <>
                <ul className="friend-list">
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        id={friend.id}
                        isOnline={friend.isOnline } />
                        
                </ul>
            </>
        );
    });

    return (
        <ul className="friend-list">
            {render}
        </ul>);
  
};


 export  const FriendListItem = ({friends,avatar,name,isOnline,id}) => {
return(
<li key={id} className="item">
    <span className="status">{isOnline }</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name }</p>
</li>
)
}