import SocialProfile from './components/SocialProfile'
import user from './user.json'

function App() {
  return (
    <div>
      <SocialProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    </div>
  );
}

export default App;
