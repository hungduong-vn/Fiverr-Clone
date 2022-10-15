import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeSideBar from "./components/HomeSideBar/HomeSideBar";
import HomePage from "./layouts/Home/HomePage";
import "./styles/main.scss";

function App() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  window.onresize = () => {
    setViewWidth(window.innerWidth);
  };
  useEffect(() => {
    const homeEle = document.querySelector("#HOME");
    // console.log(viewWidth);
    if (viewWidth < 1160 && viewWidth > 899) {
      console.log("view-lg");
      homeEle.className = "view-lg";
    } else if (viewWidth > 599) {
      console.log("view-md");
      homeEle.className = "view-md";
    } else if (viewWidth < 600) {
      console.log("view-sm");
      homeEle.className = "view-sm";
    } else {
      homeEle.className = "view-xl";
    }
  }, [viewWidth]);

  const layoutState = useSelector(state => state.layoutReducer);
  return (
    <div id="HOME">
      <HomePage />
      <HomeSideBar isShown={layoutState.showSideBar}/>
    </div>
  );
}

export default App;
