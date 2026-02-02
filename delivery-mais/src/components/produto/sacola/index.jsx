import "./style.css";


function Produto(props) {

    return (
        <div className="col-12">
            <div className="row p-3 ps-0 border-bottom">

                <div className="col-3">
                    <img
                        className="img-fluid rounded"
                        src={props.url_foto}
                        alt="" />
                </div>

                <div className="col-9">
                    <div className="d-flex justify-content-between align-items-center">
                        <small> <b> {props.nome} </b> </small>
                        <small>
                            <b>
                                {
                                    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.valor_total)
                                }
                            </b>
                        </small>
                    </div>

                    <small className="d-block">
                        {props.qtd.toLocaleString('pt-BR', { minimumIntegerDigits: 2 })}
                        <span className="ms-2 me-2">x</span>
                        {
                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.valor_unit)
                        }
                    </small>

                    {
                        props.onClickRemover ?
                            <button onClick={(e) => props.onClickRemover(props.id_carrinho)} className="btn btn-sm btn-outline-danger mt-2">Remover</button>
                            : null
                    }

                </div>
            </div>
        </div>
    );
};



export default Produto;