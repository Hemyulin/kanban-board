import "./MyButton.css";

export const MyButton = (props) => {
  const { text, link, backgroundColor } = props;
  return (
    <div className="my-button" style={{ backgroundColor: backgroundColor }}>
      {text}
    </div>
  );
};
