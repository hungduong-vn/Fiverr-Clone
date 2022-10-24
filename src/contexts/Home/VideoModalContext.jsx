import { createContext, useEffect, useState } from "react";
import VideoModal from "../../components/Home/Modal/VideoModal";

const DEFAULT_VALUE = {
  isShown: false,
  content: null,
};
const OpenVideoModalContext = createContext(DEFAULT_VALUE);
const OpenVideoModalProvider = (props) => {
  const [state, setState] = useState(DEFAULT_VALUE);
  // useEffect(() => {

  // }, [state.isShown]);
  return (
    <OpenVideoModalContext.Provider value={[state, setState]}>
      {state.isShown && <VideoModal />}
      {props.children}
    </OpenVideoModalContext.Provider>
  );
};
export { OpenVideoModalContext, OpenVideoModalProvider };
