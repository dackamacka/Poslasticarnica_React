import { useState } from "react"; 

function PoruciTortu() {
    const  kategorijeTorti = ["Svadbene","Decije","Svecane","Kolaci","SlatkiBar"];
    function posalji(){
    document.getElementById("ucitani").innerHTML=`

        <h3>${ime}</h3>
        <h3>${prezime}</h3>
        <h3>${mail}</h3>
        <h3>${telefon}</h3>
        <h3>${torte}</h3>
        
        `;   
    
    }
    const [ime,promenIime]=useState("");
    const[prezime,promeniPrezime]=useState("");
    const[mail,promeniMail]=useState("");
    const[telefon,promeniTelefon]=useState("");
    const[torte,promeniTorte]=useState("");
    
    return (
        <>
        <h1>Forma za narucivanje torte</h1>
        <h2>Dostava</h2>
        <table>
<tr>
    <td>Dostava se obavlja rashlađenim vozilima – mini hladnjačama svaki dan i nedeljom 7.00- 21.00h.</td>
    <td>DOSTAVA MLADENAČKIH TORTI</td>
    <td>DOSTAVA OSTALIH TORTI I POSLASTICA</td>
</tr>
  
<tr>
    <td>Dostava se dogovara prilikom porudžbine a najmanje 1 sat ranije za Pančevo ili 6 sati van Pančeva.

Dostava u restorane i na kućnu adresu se obavlja uz toleranciju 1 sat.

Preuzimanje iz našeg vozila u Beogradu je tačno u zakazano vreme.

Teritorija koju pokrivamo sa dostavom je u krugu stotinak kilometara od Pančeva.</td>
    <td> Dostava mladenačkih torte je besplatna za Beograd, Pančevo i okolinu (minimalna težina 10kg). Dostava mladenčkih torti se dogovara minimum dan ranije a uz toleranciju od sat vremena. Isporuka se vrši direktno u restoran.</td> 

    <td>za Pančevo – Besplatno na adresu restorana, igraonice ili Vašu kućnu (minimum 1000 din)
za Beograd – Besplatno – Svaki dan se vrši preuzimanje iz našeg vozila:

10:40h i 16:30h na parkingu OMV pumpe u Krnjači (preko puta METROa)
11:00h i 17:00h na kružnom toku kod Bogoslovije (parking ispred restorana ART Modena)
11:30h i 17:30h veliki parking preko puta Hotela Crowne Plaza (bivšeg Hotela Intercontinental) u ulici Vladimira Popovića 10 na Novom Beogradu.</td>
</tr>

  </table>
           
        <div id="ucitani">
        <h1>Korisnik koji su porucio tortu</h1>
        </div>
        <div id='poruciTortu'>
           <form >
               <input type="text" placeholder='Ime' className='razmak' onInput={(e)=>{promenIime(e.target.value); console.log(e.target.value)}}/>
               <input type="text" placeholder='Prezime'className='razmak'onInput={(e)=>{promeniPrezime(e.target.value);console.log(e.target.value)}}/>
               <input type="email" placeholder='Mail' className='razmak' onInput={(e)=>{promeniMail(e.target.value);console.log(e.target.value)}}/>
               <input type="text" placeholder='Broj telefona' className='razmak' onInput={(e)=>{promeniTelefon(e.target.value);console.log(e.target.value)}}/>
               <select name="torte" className='razmak' onChange={(e)=>{promeniTorte(e.target.value)}} >
                   {kategorijeTorti.map((kategorija)=>(
                       <option key={kategorija} >{kategorija}</option>
                   ))}

</select>
               <button onClick={(e)=>{e.preventDefault();posalji()}} className='razmak'>Poruci</button>

           </form>


        </div>
       
        </>
    )
}

export default PoruciTortu
