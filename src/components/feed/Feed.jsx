import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { posts ,Users} from "../../dbData";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share users={Users} />
        {
          posts.map(post => (<Post post={post} key={post.id }/>))  
        }
      </div>
    </div>
  );
}
