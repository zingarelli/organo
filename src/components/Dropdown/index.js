import './Dropdown.css';

const Dropdown = ({label, itens}) => {
    return (
        <div className='dropdown-container'>
            <label>{label}</label>
            <select>
                {itens.map(item => <option value={item} key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Dropdown;