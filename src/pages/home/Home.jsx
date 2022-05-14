import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import { Users ,gift,share} from "../../dbData";
import "./home.css"
function Home() {
  return (
    <>
      <Topbar users={Users}/>
      <div className="homeContainer">
        <Sidebar users={Users }/>
        <Feed share={share} users={Users} />
        <Rightbar users={Users} gift={gift} />
      </div>
   </>
  )
}

export default Home