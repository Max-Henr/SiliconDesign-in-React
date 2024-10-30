import "./PrimaryButton.css";

const PrimaryButton = ({ btnText, btnIcon, customClass = '' }) => {
  return (
    <>
      <a id="auth-signin" className={`btn-primary ${customClass}`} href="#">
        <i className={btnIcon}></i>
        <span className="btnText">{btnText}</span>
      </a>
    </>
  );
};
export default PrimaryButton;
