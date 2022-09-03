import React from 'react'
import ReactEcharts from "echarts-for-react";

export default function BarChart({ alcohol1, alcohol2, alcohol3 }) {

    const bar = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },


        xAxis: {
            name: " Alcohol Types",
            type: 'category',
            data: ['Alcohal 1', 'Alcohol 2', 'Alcohol 3'],
            nameTextStyle: {
                color: "red",
                fontStyle: "italic",
                fontSize: 20,
                verticalAlign: "mmiddle",
                lineHeight: 56
            },
            nameLocation: "center",
        },
        yAxis: {
            name: "Malic acid Avg",
            type: 'value',
            nameTextStyle: {
                color: "red",
                fontStyle: "normal",
                fontSize: 20,
                verticalAlign: "bottom",
                lineHeight: 56
            },
            nameLocation: "center",
        },
        series: [
            {
                data: [alcohol1, alcohol2, alcohol3].map(element => {
                    const total = element.reduce((sum, current) => sum + current["Malic Acid"], 0);
                    return (total / element.length);
                }), // calculating data set for average malic acid corresponding to each type of alcohol.
                type: 'bar',
                barWidth: "50%"
            }
        ]
    };

    return (
        <div className="chart">

            <ReactEcharts option={bar} style={{ height: "100%" }} /></div>
    )
}
