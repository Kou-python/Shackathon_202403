"use client"

import React, { useRef } from "react";
import { useState } from "react";
import Post from "./post";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
) 

import { Line, getElementsAtEvent } from "react-chartjs-2";






export default function (props){
  var datas = props.PostData
  var dates = []
  var scores = []
  var imgpaths = []
  for (var i=0;i<datas.length;i++){
    dates[i]=(datas[i].date.split(" ")[0])
    scores[i]=(datas[i].score)
    imgpaths[i]=(datas[i].imgpath)
  }

  const data = {
    labels :dates,
    datasets: [
      {
        label: "スコア", // 凡例
        data: scores,        // データの配列(labelsと要素数同じ)
        borderColor: "aqua",
        backgroundColor:"aqua",
        pointRadius : (context)=>{
          const ind = context.dataIndex;
          if (ind === currentDataPoint){
            return 7
          } else {
            return 4
          }

        }
      }
    ]
  };

  const options = {
    scales :{
      y:{
        beginAtZero:true
      }
    }
  };

  const [currentDataPoint, setCurrentDataPoint] = useState(0)

  const chartRef = useRef()
  function clicked(event){
    const clickedPosition = getElementsAtEvent(chartRef.current, event)
    if (clickedPosition.length > 0){
      setCurrentDataPoint(clickedPosition[0].index)
      console.log(props.PostData[currentDataPoint])
    }
  }

  return (
  <div>
    <Line options={options} data={data} ref={chartRef} onClick ={clicked}></Line>
    
    { currentDataPoint!==-1  ?
    <Post PostDataThis = {props.PostData[currentDataPoint]}/> :
    <span></span>
    }
  </div>
  )
};