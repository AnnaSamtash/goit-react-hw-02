import css from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.feedback_list}>
      <li className={css.feedback_list_item}>
        <p>Good: {good}</p>
      </li>
      <li className={css.feedback_list_item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.feedback_list_item}>
        <p>Bad: {bad}</p>
      </li>
      <li className={css.feedback_list_item}>
        <p>Total: {total}</p>
      </li>
      <li className={css.feedback_list_item}>
        <p>Positive: {positive}%</p>
      </li>
    </ul>
  );
}
