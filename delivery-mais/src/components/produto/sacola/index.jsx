import "./style.css";


function Produto(props) {

    return (
        <div className="col-12">
            <div className="row p-3 ps-0 border-bottom">

                <div className="col-3">
                    <img 
                        className="img-fluid rounded" 
                        src="https://static-images.ifood.com.br/image/upload/t_medium/pratos/cd1b9efa-c98d-4d0f-8c1a-0595beac2594/202108111938_3QAO_i.jpg" 
                        alt="" />
                </div>

                <div className="col-9">
                    <div className="d-flex justify-content-between align-items-center">
                        <small> <b> {props.nome} </b> </small>
                        <small> <b> {props.valor_total} </b ></small>                        
                    </div>

                    <small className="d-block"> {props.qtd} x {props.valor_unit}</small>

                    <button className="btn btn-sm btn-outline-danger mt-2">Remover</button>

                </div>
            </div>
        </div>
    );
};



export default Produto;