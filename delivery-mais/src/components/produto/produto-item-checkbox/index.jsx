import './style.css';


function ProdutoItemCheckbox(props) {
    return (
        <div className='card mt-4'>
            <div className='card-header d-flex justify-content-between'>
                {props.titulo}
                {/*props.obrigatorio ? <span className='badge bg-secondary'>Obrigatório</span> : null*/}
            </div>

            <ul className='list-group list-group-flush'>
                {
                    props.opcoes.map(opcao => {
                        return <li className='list-group-item d-flex justify-content-between' key={opcao.id_item}>
                            <div>
                                <input 
                                    className='form-check-input' 
                                    type="checkbox" value={""} 
                                    id={`flexCheckboxDefault${opcao.id_item}`} 
                                />
                                <label className='form-check-label ms-2' htmlFor={`flexCheckboxDefault${opcao.id_item}`}>
                                    {opcao.nome_item}    
                                </label>
                            </div>
                            <div>
                                {
                                    opcao.vl_item > 0 ?
                                        <span className='text-danger'>
                                            {
                                                new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(opcao.vl_item)
                                            }
                                        </span>
                                    : null
                                }
                            </div>
                        </li>
                    })
                }



            </ul>
        </div>
    );
};


export default ProdutoItemCheckbox;