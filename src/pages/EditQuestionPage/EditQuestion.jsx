import { useActionState } from "react";
import styles from "./EditQuestionPage.module.css";
import { QuestionForm } from "../../components/QuestionForm";
import { delayFn } from "../../helpers/delayFn";
import { API_URL } from "../../constants";
import { toast } from "react-toastify";

const editCardAction = async (_prevState, formData) => {
    try {
      await delayFn();
      const newCardQuestion = Object.fromEntries(formData);
      const resources =
        newCardQuestion.resources && newCardQuestion.resources.trim();
      const isClearForm = newCardQuestion.clearForm;
  
      const response = await fetch(`${API_URL}/react`, {
        method: "PATCH",
        body: JSON.stringify({
          question: newCardQuestion.question,
          answer: newCardQuestion.answer,
          description: newCardQuestion.description,
          resources: resources.length ? resources.split(",") : [],
          level: Number(newCardQuestion.level),
          completed: false,
          editDate: undefined,
        }),
      });
  
      let data = null;
  
      if (response.ok) {
        data = await response.json();
        toast.success("The question is successfully edited!");
      } else {
        throw new Error("error");
      }
  
      return isClearForm ? {} : data;
    } catch (error) {
      toast.error("Bad request");
      console.log("error", error.message);
      return {};
    }
  };

export const EditQuestion = ({initialState = {}}) => {

    console.log(initialState);
  const [formState, formAction, isPending] = useActionState(editCardAction, {
    ...initialState,
    clearForm: false,
  });

  return (
    <>
      {isPending && <Loader />}
      <div className={styles.container}>
        <h1 className={styles.formTitle}>Edit question</h1>
        <div className={styles.formCard}>
          <QuestionForm
            formAction={formAction}
            formState={formState}
            isPending={isPending}
            textBtn={"Edit question"}
          />
        </div>
      </div>
    </>
  );
};
