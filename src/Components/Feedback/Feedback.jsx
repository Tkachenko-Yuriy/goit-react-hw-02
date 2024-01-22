import css from "./FeedBack.module.css";
export default function FeedBack({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.list}>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>
        <p>Total:{total}</p>
      </li>
      <li>
        <p>Positive:{positive}%</p>
      </li>
    </ul>
  );
}
