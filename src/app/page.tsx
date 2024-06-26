import ProductList from "./components/ProductList"
import Slider from "./components/Slider"
import CategoryList from "./components/CategoryList"
import NewProducts from "./components/NewProducts"

const HomePage = () => {
  return (
    <div className=''>
      <Slider/>
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <h1 className="text-2xl mb-3">Featured Products</h1>
      <ProductList />
    </div>

    {/* categories */}
    <div className="mt-24">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-4">Categories</h1>
      <CategoryList/>
    </div>

    {/* new product */}
    <div className="mt-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <h1 className="text-2xl mb-3">New Products </h1>
      < NewProducts />
    </div>
    </div>
  )
}

export default HomePage