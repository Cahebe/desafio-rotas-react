import { ChangeEvent, useState } from "react";
import "./styles.css";

type FormData = {
  minPrice?: number;
  maxPrice?: number;
};

type Props = {
  onFilter: (min: number, max: number) => void;
}

export default function CardFilter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({
    minPrice: undefined,
    maxPrice: undefined 
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { minPrice, maxPrice } = formData;
    onFilter(minPrice! || 0, maxPrice! || Number.MAX_VALUE);
  }

  return (
    <section className="form-card">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          name="minPrice"
          value={formData.minPrice || ""}
          type="text"
          placeholder="Preço mínimo"
          onChange={handleInputChange}
        />
        <input
          name="maxPrice"
          value={formData.maxPrice || ""}
          type="text"
          placeholder="Preço máximo"
          onChange={handleInputChange}
        />
        <button type="submit">Filtrar</button>
      </form>
    </section>
  );
}
