import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/person/gift1.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>farnoosh</b> and <b>two friends</b> have a brithday today
          </span>
        </div>
      </div>
    </div>
  );
}
