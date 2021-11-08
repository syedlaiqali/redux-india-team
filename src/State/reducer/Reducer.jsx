const intial = {
  players: [
    {
      No: 1,
      Playre: "Virat Kohli",
      Status: "Batsman",
      imgUrl:
        "https://cricketaddictor.com/wp-content/uploads/2021/04/Virat-Kohli-11.jpg",
    },
    {
      No: 2,
      Playre: "Rohite Sharma",
      Status: "Batsman",
      imgUrl:
        "https://www.kreedon.com/wp-content/uploads/2019/03/Rohit-Sharma2-1200x720.jpg",
    },
    {
      No: 3,
      Playre: "KL Rahul",
      Status: "Wecket-keeper",
      imgUrl:
        "https://www.cricxtasy.com/wp-content/uploads/2019/10/KL-Rahul-raises-bat.jpg",
    },
    {
      No: 4,
      Playre: "MS Dhoni",
      Status: "Wecket-keeper",
      imgUrl:
        "https://images.indianexpress.com/2020/10/148841-clraytzonv-1602133322.jpg",
    },
    {
      No: 5,
      Playre: "Hardik Pandya",
      Status: "All-rounder",
      imgUrl:
        "https://img.dtnext.in/Articles/2021/Mar/202103271959467829_India-missing-Hardik-Pandya-the-bowler_SECVPF.gif",
    },
    {
      No: 6,
      Playre: "Mohammed Shami",
      Status: "Bowler",
      imgUrl:
        "https://thumbs.gfycat.com/AnguishedGranularCaribou-size_restricted.gif",
    },
  ],
};
export const Reducerfile = (state = intial, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, players: [ ...state.players, action.players] };
    default:
      return state;
  }
};
