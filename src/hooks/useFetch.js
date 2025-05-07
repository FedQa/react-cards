import { useState } from "react";
import { delayFn } from "../helpers/delayFn";
import { toast } from "react-toastify";

export const useFetch = (callback) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (...args) => {
    try {
      setIsLoading(true);
      const response = await callback(...args);
      await delayFn(1000);
      setData(response);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
  }
  };

  return { fetchData, data, isLoading, error };
};
