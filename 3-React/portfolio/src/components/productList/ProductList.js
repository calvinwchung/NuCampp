import './productList.css'
import Product from '../product/Product';
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Projects</h1>
        <p className='pl-desc'>
          These are some of the projects that I've worked on during my time with NuCamp. To see the full list of projects I've worked on please visit my GitHub.
        </p>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;