import { useEffect,useState } from 'react';

function CustomCall() {
    const url="https://fakestoreapi.com/products";
    const [products,setProducts]=useState([])
    const fetchData=async()=>{
        try {
            const data=await fetch(url);
            const res=await data.json();
            setProducts(res.slice(0,10))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return products;
}

export default CustomCall