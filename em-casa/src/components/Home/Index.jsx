
import React, {useState} from 'react';

import './style.css';
import { Image } from 'primereact/image';
import Image1  from '../../assets/imag5.jfif';
import Image2 from '../../assets/image2.jfif';
import Image3 from '../../assets/image3.jfif';
import Image4 from '../../assets/cookies.jpg';
import { TabMenu } from 'primereact/tabmenu';



import { Button } from 'primereact/button';








export default function Home (props){

     // <-----Menu----->

    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'Restaurantes'},
        {label: 'Em Casa'},
        {label: 'Mercados'},
        {label: 'Bebidas'},
        {label: 'Pets'},
        {label: 'Farmácias'},
    ];

  
    const items1 = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Busca', icon: 'pi pi-fw pi-search'},
        {label: 'Pedido', icon: 'pi pi-fw pi-pencil'},
        {label: 'Inicio', icon: 'pi pi-fw pi-file'},
        
    ];


    return (

       
       
        

        // <----Menu Footer---->
        <div>

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="comeco my-0 ms-3">R. Felizes, 254</p>
                        
                    </div>
                    
                </div>
                
                <div>
                    <TabMenu className='p-menuitem-text p-tabmenu p-menuitem-link' model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.value)}/>
                </div>
                
                <div className="menu2">
                    <Button label="Ordernar" className="p-button-outlined p-button-secondary" style={{color:"#A6A29F", borderRadius: "50px", height: "18px", fontSize: "12px"}}/>
                    <Button label="Sem Glúten" className="p-button-outlined p-button-info" style={{color:"#A6A29F", borderRadius: "50px", height: "18px", fontSize: "12px"}}/>
                    <Button label="Zero Lactose" className="p-button-outlined p-button-warning" style={{color:"#A6A29F", borderRadius: "50px", height: "18px", fontSize: "12px"}}/>
                    <Button label="Vegana" className="p-button-outlined p-button-help" style={{color:"#A6A29F", borderRadius: "50px", height: "18px", fontSize: "12px"}} />
                </div>
               
                
               <div className='flex-direction-row'>
                    <div>
                        <h5>Macarrão de Domingo</h5>
                        <Image src={Image1} alt="Image" width="250" preview />
                    </div>

                    <div>
                        <h5>Comida Deliciosa</h5>
                        <Image src={Image2} alt="Image" width="250" preview />
                    </div>

                    <div>
                        <h5>Macarrão da Vovó</h5>
                        <Image src={Image3} alt="Image" width="250" preview />
                    </div>
                </div>
                 
               

                
            
                <div className="card">
                   
                    <TabMenu model={items1} />
                </div>

           
        </div>
    );
    

}