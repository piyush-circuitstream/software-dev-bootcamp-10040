function Modal({ onClose, children }) {
    return (
        <>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </>
    );
}

export default Modal;

