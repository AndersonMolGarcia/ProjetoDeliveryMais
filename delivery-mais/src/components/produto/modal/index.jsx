import Modal from 'react-modal/lib/components/Modal';
import './style.css';

function ProdutoModal(props) {

    return (

        <Modal 
            isOpen={props.isOpen}            
            onRequestClose={props.onRequestClose}            
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <h1>Dados do Produto</h1>

        </Modal>

    );
};


export default ProdutoModal;