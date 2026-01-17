import './style.css';


function ProdutoItemCheckbox(props) {
    return (
        <div className='card mt-4'>
            <div className='card-header d-flex justify-content-between'>
                {props.titulo}
                {/*props.obrigatorio ? <span className='badge bg-secondary'>Obrigatório</span> : null*/}
            </div>

            <ul className='list-group list-group-flush'>
                <li className='list-group-item d-flex justify-content-between'>
                    <div>
                        <input className='form-check-input' type="checkbox" value={""} id="flexCheckboxDefault1" />
                        <label className='form-check-label ms-2' htmlFor="flexCheckboxDefault1">Bacon</label>
                    </div>
                    <div>
                        <span className='text-danger'>+ R$ 5,00</span>    
                    </div>
                </li>    

                <li className='list-group-item d-flex justify-content-between'>
                    <div>
                        <input className='form-check-input' type="checkbox" value={""} id="flexCheckboxDefault2" />
                        <label className='form-check-label ms-2' htmlFor="flexCheckboxDefault2">Catupiry</label>
                    </div>
                    <div>
                        <span className='text-danger'>+ R$ 2,00</span>    
                    </div>
                </li>   

                <li className='list-group-item d-flex justify-content-between'>
                    <div>
                        <input className='form-check-input' type="checkbox" value={""} id="flexCheckboxDefault3" />
                        <label className='form-check-label ms-2' htmlFor="flexCheckboxDefault3">Milho</label>
                    </div>
                    <div>
                        <span className='text-danger'>+ R$ 1,50</span>    
                    </div>
                </li>   
            </ul>
        </div>        
    );
};


export default ProdutoItemCheckbox;