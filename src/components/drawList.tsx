import React from "react";
import Flexbox from 'flexbox-react';
import { MyContext} from "../Contextos";

interface PictureInfo {
    id: string,
    picUrl: any,
    title: string,
    selected:boolean
}

export const DrawList = (prop: PictureInfo[]) =>{
    const mycontext = React.useContext(MyContext)
    const handleChange = (value:boolean,chid:string,emptc:boolean) => {
        mycontext.objectS.setList(mycontext.chartList(mycontext.objectS.lista,value,chid,emptc))
    }
return(
    <Flexbox style={{justifyContent:"space-between",width:"100%", padding:"20px"}}>
    {prop.map(cat=>(
        <div key={cat.id} >
            <div>{cat.id}</div>
            <div><img  src={cat.picUrl} height="100px" width="100px"  ></img></div>
            <div>{cat.title}</div>
            <input type="checkbox" checked={mycontext.objectS.lista.includes(cat.id)} onChange={e => handleChange(e.target.checked,cat.id,false)}/>
        </div>
        ))
    }
    </Flexbox> 
)
}