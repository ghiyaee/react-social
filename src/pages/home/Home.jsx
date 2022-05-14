import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import { Users ,gift} from "../../dbData";
import "./home.css"
function Home() {
  return (
    <>
      <Topbar users={Users}/>
      <div className="homeContainer">
        <Sidebar users={Users }/>
        <Feed />
        <Rightbar users={Users} gift={gift} />
      </div>
   </>
  )
}

export default Home