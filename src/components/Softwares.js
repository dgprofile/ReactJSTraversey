import {useState} from 'react'
 
const Softwares = () => {
  const [softwares ,setsoftwares] = useState(
    [
      {
        id: 1,
        productName: "SoundBox",
        brand: "BPL",
        price: "105$",
      },
      {
        id: 2,
        productName: "Monitor",
        brand: "Samsung",
        price: "289$",
      },
      {
        id: 3,
        productName: "CPU",
        brand: "Dell",
        price: "2128$",
      },
      {
        id: 4,
        productName: "SoundBox",
        brand: "BPL",
        price: "105$",
      },
      {
        id: 5,
        productName: "Keyboard",
        brand: "Dell",
        price: "34$",
      },
      {
        id: 6,
        productName: "Mic",
        brand: "Instamart",
        price: "29$",
      },
      {
        id: 7,
        productName: "O365",
        brand: "Microsoft",
        price: "99$",
      },
    ]
  )
  
  return (
    <>
    <h1>Software section:</h1>
      {softwares.map((software) => (
      <h1 key={software.id}>{software.productName}</h1> 
  ))}
    </>
  );
};

export default Softwares;
