import './style.css';
import Star from '../../assets/star.png';


function Pedido(props) {
    
    return (
        <div className='pedido col-sm-6 mb-4 p-1'> 
            <a href="#">
                <div className='row'>
                    <div className='col-3'>
                        <img className='img-pedido' src={props.url_imagem} alt="Estabelecimento" />
                    </div>
                    <div className='col-9 mt-2'>
                        <span className='d-block'><b>McDonald's</b></span>    
                        <small className='d-block text-danger'>Pedido Nº 45525</small>
                        <small className='d-block'>2 itens - R$ 85,00 - 26/12/2025 </small>

                        <div className=''>
                            <img src={Star} alt="Classificação" />
                            <img src={Star} alt="Classificação" />
                            <img src={Star} alt="Classificação" />
                            <img src={Star} alt="Classificação" />
                            <img src={Star} alt="Classificação" />
                        </div>

                    </div>
                </div>
            </a>
        </div>
    );
};


export default Pedido;