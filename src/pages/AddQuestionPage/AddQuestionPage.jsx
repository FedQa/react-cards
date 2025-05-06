import { useActionState } from "react";
import { Button } from "../../components/Button/Button";
import { Select } from "../../components/Select";
import styles from "./AddQuestionPage.module.css";
import { delayFn } from "../../helpers/delayFn";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";

const createCardAction = async (_prevState, formData) => {
    try {
        await delayFn();
        const newCardQuestion = Object.fromEntries(formData);
        const resources = newCardQuestion.resources && newCardQuestion.resources.trim();
        const isClearForm = newCardQuestion.clearForm;

        const response = await fetch(`${API_URL}/react435234`, {
            method: 'POST',
            body: JSON.stringify({
                question: newCardQuestion.question,
                answer: newCardQuestion.answer,
                description: newCardQuestion.description,
                resources: resources.length ? resources.split(",") : [],
                level: Number(newCardQuestion.level),
                completed: false,
            }),
        });

        let data = null;

        if (response.ok) {
            data = await response.json();
            toast.success("New question is successfully created!");
        }
        else {
            throw new Error("error");
        }

        return isClearForm ? {} : data;
    } 
    catch (error) {
        toast.error("Bad request");
        console.log("error", error.message);
        return {};
    }
};

export const AddQuestionPage = () => {
  const [formState, formAction, isPending] = useActionState(createCardAction, {
    clearForm: true,
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Add new question card</h1>

      <div className={styles.formCard}>
        <form action={formAction} className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="questionField">Question:</label>
            <textarea
              defaultValue={formState.question}
              name="question"
              id="questionField"
              cols="30"
              rows="2"
              placeholder="please enter a question"
              required
            ></textarea>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="questionField">Short answer:</label>
            <textarea
              defaultValue={formState.answer}
              name="answer"
              id="answerField"
              cols="30"
              rows="2"
              placeholder="please enter a short answer"
              required
            ></textarea>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="questionField">Description:</label>
            <textarea
              defaultValue={formState.description}
              name="description"
              id="descriptionField"
              cols="30"
              rows="2"
              placeholder="please enter a short answer"
              required
            ></textarea>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="questionField">Resources:</label>
            <textarea
              defaultValue={formState.resources}
              name="resources"
              id="resourcesField"
              cols="30"
              rows="2"
              placeholder="please enter resources"
              required
            ></textarea>
            <div className={styles.formControl}>
              <label htmlFor="questionField">level:</label>
              <Select name="level" id="levelField" optionValues={[1, 2, 3]} />
            </div>
          </div>

          <label htmlFor="clearFormField" className={styles.clearFormControl}>
            <input
              type="checkbox"
              name="clearForm"
              id="clearForm"
              className={styles.checkbox}
              defaultChecked={formState.clearForm}
            />
            <span>clear form after submition</span>
          </label>

          <Button name="Add question" isDisabled={isPending} />
        </form>
      </div>
    </div>
  );
};
