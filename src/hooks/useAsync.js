import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LoadingContext } from "../contexts/Home/LoadingContext";

export const useAsync = ({ service, condition = true, deps = [] }) => {
  const [, setLoadingState] = useContext(LoadingContext);
  const [state, setState] = useState();
  const fetchData = async () => {
    setLoadingState({ isLoading: true });
    try {
      const result = await service();
      setLoadingState({ isLoading: false });
      setState(result.data.content);
    } catch (error) {
      console.log(error);
      setState(error.response.data.content);
    }
  };
  useEffect(() => {
    if (condition) {
      fetchData();
    }
  }, deps);
  return { state };
};
