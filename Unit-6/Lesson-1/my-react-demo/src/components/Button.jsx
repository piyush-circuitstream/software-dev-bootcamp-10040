export function Button({ text, name, onClick }) {
    return (
        <button name={name} onClick={onClick}>
            {text}!!
        </button>
    );
}