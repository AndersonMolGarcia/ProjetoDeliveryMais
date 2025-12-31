import './style.css';

function Produto(props) {
    return <div className="col-sm-6 mb-3 p-4 produto-lista">
        <a href="#">
            
            <div className='row p-3 ps-0 border-bottom'>
                
                <div className='col-3'>
                    <img 
                        className="img-fluid rounded" 
                        src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/2b988c51-d3c3-4a8d-b39d-2f35153a6a0c/202108180417_xddjha30j6g.png" 
                        alt="Produto" 
                    />    
                </div>

                <div className='col-9'>
                    <small className='d-block'><b>Pizza 4 Queijos</b></small>
                    <small className='d-block'>Molho de tomate, Catupiry (Queijo Vegano à base de caju), abobrinha assada na lenha, parmesão vegano e orégano</small>
                    <small className='d-inline-block mt-3 text-success'>R$ 45,00</small>
                    <small className='d-inline-block ms-4 mt-3 preco-antigo'>R$ 60,00</small>

                </div>

            </div>

        </a>
    </div>
}

export default Produto;