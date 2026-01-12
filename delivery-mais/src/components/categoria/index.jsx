import { Link } from 'react-router-dom';
import './style.css';

function Categoria(props) {

    return <div className='categoria col-4 col-sm-3 col-md-2 col-lg-1'>
        <Link to={`/busca?id_cat=${props.id_categoria}&descr=${props.descricao}`}>
            <div>
                <img className='img_categoria' src={props.url_imagem} alt="Categoria" />
            </div>
            <span>{props.descricao}</span>
        </Link>

    </div>
};



export default Categoria;