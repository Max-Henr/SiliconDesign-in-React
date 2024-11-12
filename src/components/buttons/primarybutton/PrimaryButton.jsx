import "./PrimaryButton.css";

const PrimaryButton = ({ btnText, btnIcon, customClass = '' }) => {
  return (
    <>
      <div id="auth-signin" className={`btn-primary ${customClass}`}>
        <i className={btnIcon}></i>
        <span className="btnText">{btnText}</span>
      </div>
    </>
  );
};
export default PrimaryButton;
