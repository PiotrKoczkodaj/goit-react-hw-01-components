
import { Profile } from 'components/Profil/Profil';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'components/Profil/user.json';
import data from 'components/Statistics/data.json';
import friend from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
         <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics
      title="Upload stats"
      stats = {data}
    />
    <FriendList friends={friend} />
    <TransactionHistory items={transactions}/>
    </>
  );
};




