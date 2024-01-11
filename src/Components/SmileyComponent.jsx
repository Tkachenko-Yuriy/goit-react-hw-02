import getSmiley from "./utils/getSmiley";
export default function SmileyComponent({ moodNumber }) {
  return (
    <>
      <p
        style={{
          margin: 0,
          fontSize: "50px",
          pointerEvents: "none",
        }}
      >
        {getSmiley(moodNumber)}
      </p>
    </>
  );
}
