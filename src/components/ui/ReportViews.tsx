'use client'
import {reportView} from "@/utils/types";
import {Fragment, useEffect} from "react";
import {fetchUrl} from "@/lib/utils";

interface reportProps{
    data:reportView
}
export default function App({data}:reportProps){
    useEffect(()=>{
        const postData = async ()=>{
            try{
                await fetch(fetchUrl,{
                    method: "POST",
                    headers:{
                        contentType: "application/json",
                    },
                    body:JSON.stringify(data)
                })
            }catch(e){
                console.log(e)
            }
        }
        postData()
    },[data])
    return(
        <Fragment></Fragment>
    )
}