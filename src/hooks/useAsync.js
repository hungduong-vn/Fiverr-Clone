import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LoadingContext } from "../contexts/Home/LoadingContext";

export const useAsync = ({ service, condition = true, deps = [] }) => {
  const [_, setLoadingState] = useContext(LoadingContext);
  const [state, setState] = useState();
  const fetchData = async () => {
    setLoadingState({ isLoading: true });
    const result = await service();
    setLoadingState({ isLoading: false });
    setState(result.data.content);
  };
  useEffect(() => {
    if (condition) {
      fetchData();
    }
  }, deps);
  return { state };
};
