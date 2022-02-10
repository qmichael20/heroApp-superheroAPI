import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const urlpath = `https://superheroapi.com/api/111653218098260/${url}`;

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch("https://hosted-cors.herokuapp.com/" + urlpath)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current && data) {
          setState({
            loading: false,
            error: null,
            data: data,
          });
        } else {
          setState({
            loading: false,
            error: null,
            data: null,
          });
        }
      });
  }, [urlpath]);

  return state;
};
