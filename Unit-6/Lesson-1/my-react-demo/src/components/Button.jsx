import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button name={props.name} onClick={props.temp}>
            {props.text}
        </button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string,
    temp: PropTypes.func.isRequired
}

export default Button;