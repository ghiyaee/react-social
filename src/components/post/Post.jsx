import "./post.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/img1.jpg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">farnoosh</span>
            <span className="postDate">5 mins age</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post!</span>
          <img src="/assets/person/postImg.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="likeIcon" />
            <FavoriteIcon className="likeIcon" htmlColor="red" />
             <span className="postLikeConter">32 people like it</span>
          </div>
          <div className="postBottomRight">
               <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
