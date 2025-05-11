export default function StartCallWithFreelancer({ open, onClose }) {
    return (
        <div className={`bgModal ${open ? '' : 'hidden'}`}>
            <div className="modal5050">
                <div className="modalHeader">
                    <h2>Start Call</h2>
                    <button className="" onClick={() => onClose()}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
