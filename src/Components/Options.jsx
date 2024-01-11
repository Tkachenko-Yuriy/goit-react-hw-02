import Button from "./Button";
import css from "./Options.module.css";

export default function Options({ buttons, onClick, children }) {
  return (
    <ul className={css.list}>
      {buttons.map((button, idx) => {
        return (
          <li className={css.item} key={idx}>
            <Button variant={button} name={button} onClick={onClick} />
          </li>
        );
      })}
      {children}
    </ul>
  );
}
