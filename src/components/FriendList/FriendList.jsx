import PropTypes from "prop-types";
import styles from "./FriendList.module.css"

export const FriendList = ({ friends,children}) => {

    return (
        <>
            <ul className="friend-list">
                <FriendListItem/>
            </ul>
        </>
    );


};

 export  const FriendListItem = ({friends}) => {

console.log(friends)

}