import './TextInput.css';

// a different coding style to create a function component
// create a constant, which receives an arrow function, and export this constant
const TextInput = ({label, placeholder}) => {
    return (
        <div className="text-field">
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} />
        </div>
    );
}

export default TextInput;