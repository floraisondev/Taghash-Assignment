import React, {Component, component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import "./Analytics.css";
class Analytics extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            chartData : {
                labels : ['Mumbai', 'Bengaluru', 'Ahemdabad', 'Kolkata',
            'Chennai', 'Dehli'],
            datasets : [
                {
                    label: 'Population',
                    data:[
                        144564, 122455, 324514, 132452, 242162, 344514
                    ],
                    backgroundColor : [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                    ]
                }
            ]
            }
        }
    }
    render(){
      return(
         <div className="Analytics">
                 <div className="chart">
                 <Bar 
                    data = {this.state.chartData} 
                    options ={{
                        responsive:true,
                        maintainAspectRatio:false,
                        title:{
                            display:true,
                            text:'Populated cities in India',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }} 
                    />
             
                 </div>
                   
            
                <div className="chart">

                        <Line
                        data ={this.state.chartData}
                        options ={{
                            responsive:true,
                            maintainAspectRatio:false,
                            title:{
                                display:true,
                                text:'Populated cities in India',
                                fontSize:20
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                        }} />

            
                    </div>

                    <div className="chart">
            
              
                        <Pie data={this.state.chartData}
                    options ={{
                        responsive:true,
                        maintainAspectRatio:false,
                        title:{
                            display:true,
                            text:'Populated cities in India',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}  />

                    </div>

            
          
         </div> 

       
      )  
    }
}

export default Analytics;