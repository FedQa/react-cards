import { useEffect, useState } from "react";
import { QuestionForm } from "../../components/QuestionForm";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import { EditQuestion } from "./EditQuestion";
import { delayFn } from "../../helpers/delayFn";
import { toast } from "react-toastify";




export const EditQuestionPage = () => {

  const { id } = useParams();

  const {
    fetchData: fetchQuestion,
    data: question,
    isLoading,
    error,
  } = useFetch(async () => {
    try {
      const response = await fetch(`${API_URL}/react/${id}`);
      const data = await response.json();
      //console.log(data);
      return data;
    } catch (e) {
      console.log("error", e.message);
    }
  });

  //const [formState, formAction, isPending] = useActionState();

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
   <>
    {isLoading && <Loader />}
    {question && <EditQuestion initialState={question} />}
   </>
  );
};
