import PropTypes from "prop-types";

function Button({ text, callback, increment }) {
    return (
        <>
            <button onClick={() => callback(text)}>{text} (Increment: {increment})</button>
        </>
    );
}

export default Button;