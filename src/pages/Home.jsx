import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

const Home = () => {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise | HOME</h1>
      <Link to="./app">Go to the app</Link>
    </div>
  );
};

export default Home;
