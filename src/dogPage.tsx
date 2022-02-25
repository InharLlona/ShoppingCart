import React from "react";
import Flexbox from 'flexbox-react';
import { MyContext, MyChartContext } from "./Contextos";
import { Link} from "react-router-dom";
import {Chart} from './components/chart'
import {DrawList} from './components/drawList'
import { dogList } from "./Mock";

export const DogPage: React.FC = () =>{
   
const mychartcontext= React.useContext(MyChartContext)
   
const handleChartV = () => {
        mychartcontext.setShow(!mychartcontext.show)
}

    return (
    <div>
        <Flexbox style={{justifyContent:"space-between", padding:"10px"}}>
            <Link to="/catPage">Cats</Link> 
            <button onClick={handleChartV}>Show Chart</button>
        </Flexbox>
            <Flexbox style={{justifyContent:"space-between",width:"100vw"}}>
                {DrawList(dogList)}
                <Chart/>
            </Flexbox>
        </div>
    )

 }