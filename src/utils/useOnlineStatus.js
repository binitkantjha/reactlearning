import { useEffect, useState } from "react"


const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] =  useState(true)
    useEffect(()=>{
        window.addEventListener('offline', function(e) {
            setonlineStatus(false);
            
         }); 
         window.addEventListener('online', function(e) {
            setonlineStatus(true);
            
         }); 

    }, [])

    return  onlineStatus
}

export default useOnlineStatus;