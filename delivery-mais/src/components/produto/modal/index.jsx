import Modal from 'react-modal/lib/components/Modal';
import './style.css';
import closeIcon from '../../../assets/close.png';
import ProdutoItemRadio from '../produto-item-radio';
import ProdutoItemCheckbox from '../produto-item-checkbox';

function ProdutoModal(props) {

    return (

        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type='button' onClick={props.onRequestClose} className='react-modal-close'>
                <img src={closeIcon} alt="Fechar" />
            </button>


            <div className='container-fluid h-100 produto-modal'>
                <div className='row detalhes-produto'>
                    <div>
                        <img className='img-fluid rounded img-produto-modal' src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/cd1b9efa-c98d-4d0f-8c1a-0595beac2594/202108112007_P5N0_i.jpg" alt="Produto" />
                    </div>

                    <div className='col-12 mt-4'>
                        <h4 className='mt-2'>Pizza Quatro Queijos</h4>
                        <small className='d-block'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nobis alias voluptates cum amet expedita, inventore facilis quia libero velit harum aut repellendus sequi reiciendis deserunt veniam assumenda eos accusamus.
                        </small>

                        <small className='mt-3 promocao'>R$ 45,00</small>
                        <small className='mt-3 ms-4 preco-antigo'>R$ 60,00</small>
                    </div>

                    <div className='col-12 mb-4'>
                        <ProdutoItemRadio 
                            obrigatorio
                            titulo="Escolha a borda"
                        />
                        <ProdutoItemCheckbox 
                            titulo="Turbine sua pizza"
                        />
                    </div>
                </div>


                <div className='row'>
                    <div className='col-12 mt-3 d-flex justify-content-end'>
                        
                        <div className='d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap gap-2'>
                            <button className='btn btn-outline-danger'><i className="fa-solid fa-minus"></i></button>
                            <span className='m-2 button-qtd'>03</span>
                            <button className='btn btn-outline-danger '><i className="fa-solid fa-plus"></i></button>
                            <button className='btn btn-danger ms-4'>Adicionar a sacola (R$ 50,00)</button>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>

    );
};


export default ProdutoModal;