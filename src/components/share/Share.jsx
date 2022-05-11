import './share.css'
import PermMediaIcon from "@mui/icons-material/PermMedia";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/img1.jpg"
            alt=""
          />
          <input placeholder="What's in yuor" className="shareInpu" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <PermMediaIcon className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <PermMediaIcon className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <PermMediaIcon className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
