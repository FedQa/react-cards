import { Button } from "../Button/Button"
import { Select } from "../Select"
import styles from "./QuestionForm.module.css"


export const QuestionForm = ({formAction, formState, isPending, textBtn}) => {
    return (
        <form action={formAction} className={styles.form}>
          <input type="text" name="questionId" defaultValue={formState.id} hidden />§
        <div className={styles.formControl}>
          <label htmlFor="questionField">Question:</label>
          <textarea
            defaultValue={formState?.question}
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
            defaultValue={formState?.answer}
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
            defaultValue={formState?.description}
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
            defaultValue={formState?.resources}
            name="resources"
            id="resourcesField"
            cols="30"
            rows="2"
            placeholder="please enter resources"
          ></textarea>
          <div className={styles.formControl}>
            <label htmlFor="questionField">level:</label>
            <Select name="level" id="levelField" optionValues={[1, 2, 3]} />
          </div>
        </div>

        <label htmlFor="clearForm" className={styles.clearFormControl}>
          <input
            type="checkbox"
            name="clearForm"
            id="clearForm"
            className={styles.checkbox}
            defaultChecked={formState?.clearForm}
          />
          <span>clear form after submition</span>
        </label>

        <Button name={textBtn} isDisabled={isPending} />
      </form>
    )
}