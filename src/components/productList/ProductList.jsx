import './productList.css'
import Product from '../product/Product'

import { products } from '../../data'

const ProductList = () => {
    return (
        <>
            <div className='pl'>
                <div className="pl-texts">
                    <h1 className='pl-title'>Create & Develop</h1>
                    <p className='pl-desc'>
                        Contribute my knowledge and experience, as well as my enthusiasm and attitude to my projects.
                    </p>
                </div>


                <div className="pl-list">

                    {products.map((item) => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))
                    }

                </div>

                <div className='more'>
                    <p>And More ...<a href='https://github.com/TimmyCOCO' target='_blank'>On My GitHub</a>
                    </p>
                </div>

            </div>
        </>
    )
}

export default ProductList