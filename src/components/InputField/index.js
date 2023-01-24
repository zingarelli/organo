import './InputField.css';

// a different coding style to create a function component
// create a constant, which receives an arrow function, and export this constant
const InputField = ({ type='text', required=false, label, placeholder, text, onChange }) => {

    const onTyped = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className={`field-container field-${type}`}>
            <label htmlFor="">{label}</label>
            <input value={text} type={type} placeholder={placeholder} required={required} onChange={onTyped} />
        </div>
    );
}

export default InputField;