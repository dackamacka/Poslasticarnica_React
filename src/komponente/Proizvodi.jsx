import React from 'react'
import JedanProizvod from './JedanProizvod'
//prima tri propertija, products, ono sto smo poslali, dodaj i oduzmi funkcije 
const Proizvodi = ({products,Dodaj,Oduzmi}) => {
    const naziv="Naziv proizvoda";
    const opis="Opis proizvoda";
    
    return (
        <><div className='opis'>
     <h2>Koja je tajna Anči Kolača?</h2>
                <h5>Torte, kolače i sve druge poslastice izrađujemo po domaćim,tradicionalnim receptima
                    koristeći najkvalitetnije i najfinije domaće i uvozne sirovine koje su uz ručnu izradu naših veštih poslastičara garancija kvaliteta.
                    Svakim danom trudimo se da budemo još bolji, a torte i kolači još ukusniji pa spajamo najmoderniju
                    tehnologiju sa tradicionalnim načinima pravljenja poslastica.</h5>

        </div>
        
        
        
        <div className="all-products">
            {products.map((prod) => {
                return <JedanProizvod product={prod} key={prod.id} Dodaj={Dodaj} Oduzmi={Oduzmi} inCart={1} />;
            })}
            {/*<JedanProizvod product={products[0]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[1]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[2]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[3]} Dodaj={Dodaj}/>
     <JedanProizvod product={products[4]} Dodaj={Dodaj}/>
     */}
        </div></>
    )
}

export default Proizvodi


