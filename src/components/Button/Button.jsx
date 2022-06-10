import './button.css'

function Button({ placeholder, Click}) {
    return (
        <button className='component_button' onClick={Click}>{placeholder}</button>
    )
}

export default Button;