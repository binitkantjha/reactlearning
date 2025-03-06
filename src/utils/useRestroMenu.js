import { useEffect , useState} from "react"

const useRestroMenu = (api , param) => {
const [resData , setresData] =  useState(null);

useEffect(()=>{
 fetchData()
}, [])

const fetchData =  async () => {
    const data = await fetch(api + param)
    const json = await data.json(); 
    setresData (json);
}

return resData;
}

export default useRestroMenu;