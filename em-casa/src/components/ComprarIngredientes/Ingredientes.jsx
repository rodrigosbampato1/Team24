import { Divider } from "primereact/divider";
import "./Ingredientes.css";

const Ingredientes = ({ingrediente, totalIngrediente}) => {
  return (
    <>
      <div className="ingredienteStyle">
          <label>{ingrediente}</label>
          <label>{totalIngrediente}</label>
      </div>
      <Divider />
    </>
  )
}

export default Ingredientes;