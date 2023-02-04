import React, { useRef, useState } from 'react'




export default function Numero() {
  const [contacts, setContacts] = useState([]);
  const inptN = useRef();
  const inptNm = useRef();
  const inptV = useRef();

  const fun = () => {
    const v_nom = inptN.current.value;
    const v_nm = inptNm.current.value;
    const v_v = inptV.current.value;
    setContacts([...contacts, { name: v_nom, number: v_nm, city: v_v }]);
    inptN.current.value="";
    inptNm.current.value="";
    inptV.current.value="";

  }
  const funDelete = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  }
  const afficher=()=>{
    document.getElementById("aff").style="dispaly:block"
  }
  const funSort = () => {
    const sortedContacts = contacts.slice().sort((a, b) => a.city.localeCompare(b.city));
    setContacts(sortedContacts);
  }
  const [searchCity, setSearchCity] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleSearch = () => {
    const filtered = contacts.filter(contact => contact.city.toLowerCase().includes(searchCity.toLowerCase()));
    setFilteredContacts(filtered);
    
    
    
  }
  

  return (
    <div id="div_prn">
      <div id="div1">
        <h1 id="title"><i class="gg-phone" id="icone"></i>  &nbsp;Contact</h1>
        <input type="text" placeholder='Enter Name' ref={inptN} className="inpts" ></input><br/>
        <input type="text" placeholder='Enter Number' ref={inptNm} className="inpts"></input><br/>
        <input type="text" placeholder='Enter City' ref={inptV} className="inpts"></input><br/>
        <input type="button" value="+" onClick={fun} className="btnj" ></input> <br/>
      </div>
      <div id="div2">
        <input type="button" value="show contact" onClick={afficher}id="btnAff" ></input> 
        <button onClick={funSort} id="btnSort">Sort by city</button>
        <input type="text" className="inpts" placeholder='Enter City' onChange={e => setSearchCity(e.target.value)} ></input>
        <button onClick={handleSearch} id="btnSearch"><i class="gg-search"></i></button>
       <div id="cher">
        {
          filteredContacts.map((el, i) => (
            <div key={i}>
              {el.name} {el.number}   {el.city}
            </div>
          ))
        }
       </div>
      <div style={{display:'none'}} id="aff">
        <h2 id="haff">Your contact:</h2>
        {
        contacts.map((el, i) => (
             <div key={i+el.name} className="ic">{el.name} : {el.number}  &nbsp; &nbsp; <i class="gg-pin" ></i>&nbsp;{el.city}
             <button onClick={() => funDelete(i)} id="btnD">Delete</button>
             </div>
          ))}
      </div>
      </div>
      
    </div>
  )
}