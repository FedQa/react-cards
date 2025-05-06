import { Button } from "../../components/Button/Button";
import { Select } from "../../components/Select";
import styles from "./AddQuestionPage.module.css";

export const AddQuestionPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Add new question card</h1>

      <div className={styles.formCard}>
        <form action="" className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="questionField">Question:</label>
            <textarea
              defaultValue=""
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
              defaultValue=""
              name="question"
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
              defaultValue=""
              name="question"
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
              defaultValue=""
              name="question"
              id="resourcesField"
              cols="30"
              rows="2"
              placeholder="please enter resources"
              required
            ></textarea>
            <div className={styles.formControl}>
              <label htmlFor="questionField">level:</label>
              <Select
                name="level"
                id="levelField"
                optionValues={[1, 2, 3]}
              />
            </div>
          </div>

          <label htmlFor="clearFormField" className={styles.clearFormControl}>
            <input 
            type="checkbox" 
            name="clearField" 
            id="clearField"
            className={styles.checkbox}
            defaultChecked={true}
             />
             <span>clear form after submition</span>
          </label>

          <Button name="Add question" />
        </form>
      </div>
    </div>
  );
};
