import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Estabelecimento from "../../components/estabelecimento";
import Categoria from '../../components/categoria';
import Banner from '../../components/banner';

function Home(){
      

    return <>
        <div className="container-fluid mt-page">
            <Navbar />  

            <div className="row justify-content-center text-center">
                {
                    [1,2,3,4,5,6,7,8,9, 10].map(categoria => {
                        return <Categoria key={categoria} url_imagem="https://d4p17acsd5wyj.cloudfront.net/shortcuts/grocery.png" />
                    })
                }
            </div>  

            <div className='row justify-content-center text-center mt-5 m-2'>
                {
                   [1,2,3,4].map(banner => {
                        return <Banner key={banner} url_imagem="https://static-images.ifood.com.br/image/upload/t_high/discoveries/CombosComRefrisPrincipal3_m53S.png"  />
                   })
                }
            </div> 

            {
               [1,2,3].map(destaque => {
                    return <div className='row mt-5 m-2' key={destaque}> 
                        
                        <h4>Destaques: Entrega grátis</h4>

                        {
                            [1,2,3,4,5,6,7,8].map(estabelecimento => {
                                return <Estabelecimento 
                                    key={estabelecimento}
                                    url_imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/201804191757_2b988c51-d3c3-4a8d-b39d-2f35153a6a0c.jpg"
                                    nome="MacDonald's"
                                    avaliacao="4.5"
                                    categoria="Lanches"
                                />
                            })
                        }
                    </div>

               })
            }

            <Footer 

            />

        </div>
    </>
}

export default Home;