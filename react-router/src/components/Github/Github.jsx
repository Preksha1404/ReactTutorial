import React from 'react'
import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data= useLoaderData();
    // console.log(data);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Preksha1404')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])
  return (
    <>
        <div>Github followers:{data.followers}</div>
        <img src={data.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full" />
    </>
  )
}

export default Github

export const githubInfoLoader= async()=>{
    const response=await fetch('https://api.github.com/users/Preksha1404')
    return response.json();
}