import "./post.css"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Users } from "../../dbData";
export default function Post({ post }) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((user) => user.id === post?.userId)[0].profilePic}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon className="likeIcon" />
            <FavoriteIcon className="likeIcon" htmlColor="red" />
            <span className="postLikeConter">{`${post.like} people like it`}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{`${post.comment} comments`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
