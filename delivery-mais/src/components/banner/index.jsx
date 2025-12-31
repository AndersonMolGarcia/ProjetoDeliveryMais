import './style.css';


function Banner(props) {

    return (
        <div className='banner col-sm-6 col-lg-3 mb-3'>
            <a href="#">
                <div>
                    <img className='img-banner' src={props.url_imagem} alt="Banner" />    
                </div>
            </a>
        </div>
    );
};


export default Banner;