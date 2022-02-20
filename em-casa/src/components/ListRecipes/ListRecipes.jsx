import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./ListRecipes.css";


export default function ListRecipes() {
   
    const footer = (
        <span>
            <Button className="botao" label="Selecionar" icon="pi pi-check" />
            <Button label="Cancelar" icon="pi pi-times" className="p-button-secondary-ml-2" />
        </span>
    );

    return (
        <div>
            <div className="card">
                    <h5>Basic</h5>
                    <image src= "" alt="Image" width="250" />

                    <h5>Preview</h5>
                    <image src={Image1} alt="Image" width="250" preview />
                </div>
            <Card  title="Macarrão sem Glúten" style={{ width: '25rem', marginBottom: '2em'}}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Pensando em facilitar a vida de pessoas celíacas, preparamos um menu com opções livre de glúten.</p>
            </Card>

            <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        </div>
    )

  
}
