import "./App.css";
import Profile from "./profile/Profile.js";
import Photo from "./assets/photo.jpg";

function App() {
  const showname = (name) => alert(`My name is : ${name}`);
  return (
    <div>
      <Profile
        fullName="Ghassen Roudesly"
        skills={"HTML, CSS ,JavaScript and JS Frameworks (React)"  }
        showname={showname}
      >
        <img src={Photo} alt="img" />
      </Profile>
    </div>
  );
}

export default App;
