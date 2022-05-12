import "./post.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
                  <div className="postTopLeft">
                      <img src="/assets/person/img1.jpg" alt="" className="postProfileImg" />
                      <span className="postUsername">farnoosh</span>
                      <span className="postDate">5 mins age</span>
                 </div>
                  <div className="postTopRight">
                   <MoreVertIcon/>   
                 </div>
           </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}
