import './style.css';



function ProdutoItemRadio(props) {

    return (
        <div className='card mt-4'>
            <div className='card-header d-flex justify-content-between'>
                {props.titulo}

                {
                    props.obrigatorio ?
                        <span className='badge bg-secondary'>OBRIGATÓRIO</span>
                        : null
                }

            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                        <label className="form-check-label ms-2" htmlFor="radioDefault1">
                            Borda fina
                        </label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                        <label className="form-check-label ms-2" htmlFor="radioDefault2">
                            Borda grossa
                        </label>
                </li>
                <li className="list-group-item">
                    <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3" />
                        <label className="form-check-label ms-2" htmlFor="radioDefault3">
                            Borda recheada
                        </label>
                </li>

            </ul>

        </div>
    );
};


export default ProdutoItemRadio;