import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
export default function Feed({share,users}) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share users={users }/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
