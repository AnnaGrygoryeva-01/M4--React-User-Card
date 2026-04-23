const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const user = {
    name: "Marie",
    surname: "Curie",
    gender: "female",
    location: {
      city: "Warsaw",
      country: "Poland",
    },
    stats: {
      numberOfTweets: 45,
      numberOfFollowings: 125,
      numberOfFollowers: 12945,
    },
    media: {
      imgSrc:
        "https://th-thumbnailer.cdn-si-edu.com/una2KAHqbHPvdGwWVYYoPWBrJ_E=/1280x960/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Madame-Curie-Paris-631.jpg",
      backgroundImg: "https://objects.lib.uidaho.edu/campus/campus01307.jpg",
    },
  };
  return (
    <>
      <UserInfo user={user} />
    </>
  );
}

function UserInfo(props) {
  const {
    name,
    surname,
    gender,
    location: { city, country },
    stats,
    media,
  } = props.user;

  const fullName = `${name} ${surname}`;
  const userGenderStyle = {
    boxShadow: `0 0 15px ${gender === "female" ? "purple" : "navy"}`,
  };

  return (
    <article className="userCard">
      <img className="backgroundImg" src={media.backgroundImg} alt={fullName} />
      <img
        className="userImage"
        style={userGenderStyle}
        src={media.imgSrc}
        alt={fullName}
      />
      <h2 className="userName">{fullName}</h2>
      <p>
        {city}, {country}
      </p>
      <div className="userStats">
        <div className="userStat">
          <p className="label">Tweets</p>
          <p>{stats.numberOfTweets}</p>
        </div>
        <div className="userStat">
          <p className="label">Following</p>
          <p>{stats.numberOfFollowings}</p>
        </div>
        <div className="userStat">
          <p className="label">Followers</p>
          <p>{stats.numberOfFollowers}</p>
        </div>
      </div>
    </article>
  );
}
