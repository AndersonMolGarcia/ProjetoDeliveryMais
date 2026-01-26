import './style.css';



function Endereco(props) {

    return (

        <div className='col-12 pt-3 pb-3 border-bottom'>

            <div className='d-flex justify-content-between align-itens-center'>
                <div className=''>
                    <span className='d-block'>
                        <b>
                            {props.endereco}
                            {props.complemento ? ' - ' + props.complemento : null}                       
                        </b>
                    </span>
                    <small className='d-block'>{props.bairro} - {props.cidade} - {props.uf}</small>
                    <small className='d-inline-block me-3'>CEP: {props.cep}</small>
                    {
                        props.ind_padrao === 'S' ?
                            <small className='d-inline-block text-danger'>Endereço Principal</small>
                        : null
                    }
                </div>

                <div>
                    {
                        props.ind_padrao != 'S' ? <button className='btn btn-outline-secondary me-3 m-2'>Tornar Padrão</button> : null
                    }
                    <button onClick={(e) => props.onClickEditEndereco(props.id_endereco)} className='btn btn-outline-danger me-3 m-2'>Editar</button>
                    <button className='btn btn-danger m-2'>Excluir</button>
                </div>
            </div>


        </div>

    );
};


export default Endereco;