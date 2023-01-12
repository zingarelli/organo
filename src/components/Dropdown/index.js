import './Dropdown.css';

const Dropdown = ({required, label, itens}) => {
    return (
        <div className='dropdown-container'>
            <label>{label}</label>
            <select required={required}>
                {itens.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;