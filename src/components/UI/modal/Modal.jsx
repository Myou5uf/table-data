import './Modal.scss';

const Modal = ({title, visible, setVisible, children}) => {

    const isOpen = visible ? "modal_show" : "";
    const classes = ["modal", isOpen].join(" ").trim();

    return (
        <div className={classes} onClick={() => setVisible(false)}>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                <div className="modal__body">
                    <button className="modal__close" onClick={() => setVisible(false)}></button>
                    <div className="modal__title">{title}</div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;