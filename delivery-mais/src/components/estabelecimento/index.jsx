import './style.css';
import Star from "../../assets/star.png";

function Estabelecimento(props) {
    return <div className='estabelecimento col-sm-6 col-md-4 col-lg-3 mb-3 p-2'>
        <a href="#">
            <div className='row'>
                <div className='col-3'>
                    <img className='img_estabelecimento' src={props.url_imagem} alt="Logotipo" />
                </div>

                <div className='col-9 mt-2 ps-1'>
                    <span>{props.nome}</span>
                    <div className='avaliacao'>
                        <img src={Star} alt="Avaliação" />
                        <span>{props.avaliacao} - {props.categoria}</span>
                    </div>

                    {
                        props.btnRemoverFavorito ? <button className='btn btn-sm btn-outline-danger mt-2'>Remover</button> : null
                    }

                </div>
            </div>
        </a>

    </div>
}

export default Estabelecimento;