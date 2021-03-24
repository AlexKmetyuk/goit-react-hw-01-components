import SocialProfile from './components/socialProfile/SocialProfile'
import user from './components/socialProfile/user.json'
import Statistics from './components/statistics/Statistics'
import statisticalData from './components/statistics/statistical-data.json'
import FriendList from './components/friends/FriendList'
import friends from './components/friends/friends.json'
import TransactionHistory from './components/transaction/TransactionHistory'
import transaction from './components/transaction/transaction.json'


function App() {
  return (
    <>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics title="Upload stats" stats={statisticalData} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory transaction={transaction}/>
    </>
  );
}

export default App;
