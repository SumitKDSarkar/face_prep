import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    // Get data
    const getData = async ()=>{
        try{
    
          const res = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`)
          // console.log(res.data.results);
          
          setData((prev) => [...prev, ...res.data.results]);
          setLoading(false);
      
        }catch(err){
          console.log(err);
        }
    
      };
    
      //  Data fetch
      useEffect(()=>{
        getData()
    
      },[page])


      
      const handelInfiniteScroll = async () => {
      
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            setLoading(true);
            setPage((prev) => prev + 1);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
      }, []);
    
      return (
        <div className="Home">
          
            {data.map(item => (
        <div className="gridDiv" key={item.index}>
            <div className="div">
        <h3 className="nameDetails">{item.name.title}{" "}{item.name.first}{" "}{item.name.last}</h3>
        <img className='img' src={item.picture.large} alt="img" />
        </div>
      </div>
    ))}
     {loading && <img style={{margin:"auto", width:"100px" , backgroundColor:"none", marginTop:"20px"}} src='https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif'/>}
          </div>
       
      );

  
}




