import  Login from './components/Login'
import Profile from './components/Profile'
import Theme from './components/Color'
import FetchedUsers from './components/Fetch'

export default function App() {
  return (
    <div>
      <Profile/>
      <Login/>
      <Theme/>
      <FetchedUsers/>
    </div>
  )
}
