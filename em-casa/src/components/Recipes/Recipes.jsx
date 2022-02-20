import { useState, useEffect } from 'react';

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function Recipes(props) {
    const [ingredients, setIngredients] = useState(['']);
    const [recipe, setRecipe] = useState({ingredients: ingredients});

    const addIngredient = (e) => {
        e.preventDefault();
        setIngredients([...recipe.ingredients, ''])
    }

    const publishRecipe = (e) => {
        e.preventDefault();
    }

    const renderIngredients = () => {
        return (
            <div className='d-flex flex-column'>
                {ingredients.map((ingredient, index) => {
                    return (
                        <InputText 
                            className='mb-2'
                            key={index}
                            value={ingredient} 
                            onChange={(e) => ingredients[index]=e.target.value} />
                    )
                })}

                <Button 
                    className='mb-2'
                    label='Adicionar Ingrediente' 
                    icon='pi pi-plus' 
                    style={{backgroundColor: '#EA1D2C'}}
                    onClick={(e) => addIngredient(e)} />
            </div>
        )
    }

    const insertNumberField = (fieldName, label) => {
        return (
            <span className='mb-2 align-items-start d-flex flex-column'>
                <h5>{label}</h5>
                <InputNumber 
                    value={recipe[fieldName]}
                    suffix=' minutos'
                    onValueChange={(e) => setRecipe({...recipe, fieldName: e.target.value})}
                />
            </span>
        )
    }

    useEffect(() => {

    }, [recipe, ingredients])

    return (
        <div className='d-flex flex-column align-items-start m-3'>
            <h3>Tempo da Receita</h3>
            {insertNumberField('preparationTime', 'Tempo de preparo')}
            {insertNumberField('cookingTime', 'Tempo de cozimento')}
            {insertNumberField('waitingTime', 'Tempo de espera')}
            <h3>Ingredientes</h3>
            {renderIngredients()}
            <h3>Modo de Preparo</h3>
            <InputTextarea 
                rows={5} 
                value={recipe?.preparation} 
                onChange={(e) => setRecipe({...recipe, preparation: e.target.value})}
            />
            <Button 
                className='mt-2'
                label='Publicar Receita' 
                icon='pi pi-check' 
                style={{backgroundColor: '#EA1D2C'}}
                onClick={(e) => publishRecipe()} 
            />
        </div>
    )
}