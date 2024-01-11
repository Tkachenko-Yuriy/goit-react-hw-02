import Title from "./Title";

export default function Description({ title, children }) {
  return (
    <>
      {title && <Title title={title} />}
      {children}
    </>
  );
}
