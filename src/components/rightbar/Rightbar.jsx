import "./rightbar.css"

export default function Rightbar({ users ,gift}) {
  const renderUsers = users.map(u => {
    return (
      <>
        <li className="rightbarFriend" key={u.id}>
          <div className="rightbarProfileImgContainer">
            <img
              src={u.profilePic}
              alt=""
              className="rightbarProfileImg"
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">{u.username }</span>
        </li>
      </>
    );
  })

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src={gift[0]} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>farnoosh</b> and <b>two friends</b> have a brithday today
          </span>
        </div>
        <img src={gift[1]} alt="" className="rightbarhbd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList" >
         {renderUsers}
        </ul>
      </div>
    </div>
  );
}
