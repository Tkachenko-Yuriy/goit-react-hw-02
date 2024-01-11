import css from "./Options.module.css";
export default function Button({ variant, name, onClick }) {
  return (
    <button
      className={css[variant]}
      type="button"
      name={name}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
