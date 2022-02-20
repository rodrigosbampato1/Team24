import { useState } from "react";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import Ingredientes from "./Ingredientes";
import "./ComprarIngredientes.css";

const ComprarIngredientes = ({ingrediente, totalIngrediente}) => {
  const [porcoes, setPorcoes] = useState(1);
  totalIngrediente = porcoes;

  const ingredientes = [
    {
      ingrediente: "Alface",
      quantidade: totalIngrediente,
    },
    {
      ingrediente: "Bacon",
      quantidade: totalIngrediente,
    },
    {
      ingrediente: "Hambúrguer de carne",
      quantidade: 2 * totalIngrediente,
    },
    {
      ingrediente: "Ovo",
      quantidade: totalIngrediente,
    },
    {
      ingrediente: "Queijo",
      quantidade: totalIngrediente,
    },
    {
      ingrediente: "Pão",
      quantidade: totalIngrediente,
    },
  ];
  
  return (
    <div>
      <h2>Ingredientes</h2>
      {ingredientes.map((ing) => (
        <Ingredientes
          ingrediente={ing.ingrediente}
          totalIngrediente={ing.quantidade}
        />
      ))}
      <label>Total de porções: </label>
      <input 
            type="number"
            value={porcoes} 
            onChange={(e) => setPorcoes(e.target.value)} 
            min={1} 
            max={100} 
            className="p-inputtext"
          />
      <Divider />
      <Button label="Comprar" className="p-button-danger" style={{marginBottom: "20px"}} />      
    </div>
  )
}
export default ComprarIngredientes;