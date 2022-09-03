import React from 'react'
import { data } from '../Wine-Data'
import ReactEcharts from "echarts-for-react";
export default function ScatterPlot() {
    const scatter = {
        xAxis: {
            name: "Color Intensity",
           
            data: data.map(d => d["Color intensity"]), //finding dataset for x-axis using map function.
            nameLocation:"center",
            nameTextStyle:{
                color:"red",
                fontStyle:"italic",
                fontSize:20,
                verticalAlign:"mmiddle",
                lineHeight:56
            }
        },
        yAxis: {
            name: "Hue",
            type:"value",
            nameTextStyle:{
                color:"red",
                fontStyle:"normal",
                fontSize:20,
                verticalAlign:"bottom",
                lineHeight:40,
              
            },
            nameLocation:"center",
        },
        series: [
            {
                type: 'scatter',
                data: data.map(d => d.Hue) //finding dataset for y-axis by using map function
            }
        ]
    };

    return (
        <div className="chart">
            
            <ReactEcharts option={scatter} style={{ width: "100%",height:"100%" }} /></div>
    )
}
