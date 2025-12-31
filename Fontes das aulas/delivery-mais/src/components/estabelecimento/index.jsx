function Estabelecimento(props){
    return <>
    <img src={props.url_imagem} alt="Logotipo" /><br />
    <b>{props.nome}</b><br />
    <i className="fas fa-star"></i>{props.avaliacao} - {props.categoria}<br /><br /><br />
    </>
}

export default Estabelecimento;