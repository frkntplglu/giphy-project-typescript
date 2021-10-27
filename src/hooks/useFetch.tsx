import { useState, useEffect, useCallback } from "react";
import {GifData, GifType} from "../types"
import api from "../services/api";


function useFetch(query: string, offset: number, isSearch: boolean) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<GifType[]>([]);

  const sendQuery = useCallback(async () => {
    if(isSearch) setList([])
    try {
      if(query !== ""){
        setLoading(true);
        setError(false);
        const { data } = await api.get<GifData>(`search?api_key=f4nA7EJOnybwdpv9cnTsCG10bpEKm54g&q=${query}&limit=25&offset=${offset}&rating=g&lang=en`);
        setList(images => [...new Map([...images, ...data.data].map(image => [image["id"], image])).values()]);
        setLoading(false);
      }
      
    } catch (err) {
      setError(true);
    }
  }, [query, offset, isSearch]);

  useEffect(() => {
    sendQuery();
  }, [query, sendQuery, offset]);

  return { loading, error, list };
}

export default useFetch;

