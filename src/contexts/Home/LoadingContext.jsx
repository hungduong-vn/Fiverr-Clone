import { Spin } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { WrapperSpin } from "../../styles/Home/Loading/Spinner";

const DEFAULT_VALUE = {
  isLoading: false,
};

const LoadingContext = createContext(DEFAULT_VALUE);
const LoadingProvider = (props) => {
  const [state, setState] = useState(DEFAULT_VALUE);
  return (
    <LoadingContext.Provider value={[state, setState]}>
      {state.isLoading && (
        <WrapperSpin viewHeight="100vh">
          <Spin />
        </WrapperSpin>
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
