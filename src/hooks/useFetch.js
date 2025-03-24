import { useState } from "react";
import { delayFn } from "../helpers/delayFn";

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

const fetchFn = async(...args) => {
    try {
        setIsLoading(true);
        const response = await callback(...args);
        await delayFn(1000);
        return response;
      } catch(error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
  }

  return [fetchFn, isLoading, error];
};
