import ProductDTO from "../../models/product-dto";
import CardFilter from "../CardFilter";
import CardList from "../CardList";
import * as productService from "../../services/product-service";
import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import { ContextListSize } from "../../utils/context-list-size";


export default function Body() {

  const [products, setProducts] = useState<ProductDTO[]>(productService.getAllProducts());

  const {setContextListSize} = useContext(ContextListSize);

  function handleFilter(min: number, max: number) {
    const productList = productService.findByPrice(min, max);
    setContextListSize(productList.length);
    setProducts(productList);
  }

  return (
    <main className="body-container">
      <CardFilter onFilter={handleFilter}/>
      <CardList products={products}/>
    </main>
  );
}
