import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  console.log(otherProps.value);
  return (
    
    <div className="group">
      <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>{label}</label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;