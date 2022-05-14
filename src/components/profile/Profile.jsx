import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { Users, gift } from "../../dbData";
import "./profile.css";
export default function Profile() {
  return (
    <div>
      <Topbar users={Users} />
      <div className="profile">
        <Sidebar users={Users} />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/postImg6.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/g1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">farnoosh</h4>
              <span className="profileInfoDesc">I loved This Photo</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed users={Users} />
            <Rightbar users={Users} gift={gift} />
          </div>
        </div>
      </div>
    </div>
  );
}
