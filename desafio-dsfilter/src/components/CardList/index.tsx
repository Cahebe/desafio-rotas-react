import "./styles.css";
import ProductDTO from "../../models/product-dto";
import { useContext, useEffect } from "react";
import { ContextListSize } from "../../utils/context-list-size";

type CardListProps = {
  products: ProductDTO[];
};

export default function CardList({ products }: CardListProps) {

  const { setContextListSize } = useContext(ContextListSize);

  useEffect(() => {
    setContextListSize(products.length);
  }, [products.length, setContextListSize]);

  return (
    <section className="list-card">
      <div className="list-container">
        {/* Mapeie e renderize os produtos */}
        {products.map(product => (
          <div key={product.id} className="product-card">
            {/* Aqui você pode renderizar as informações do produto, por exemplo: */}
            <p className="product-name">{product.name}</p>
            <p className="product-price">R$ {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
