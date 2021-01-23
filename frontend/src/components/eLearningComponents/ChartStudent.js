import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class App extends Component {
 render() {
  const options = {
   animationEnabled: true,
   title: {
    text: 'USERS DASHBOARD',
   },
   data: [
    {
     type: 'pie',
     startAngle: 75,
     toolTipContent: '<b>{label}</b>: {y}',
     showInLegend: 'true',
     legendText: '{label}',
     indexLabelFontSize: 16,
     indexLabel: '{label} - {y}',
     dataPoints: [
      { y: this.props.students, label: 'Students' },
      { y: this.props.customers, label: 'Customers' },
     ],
    },
   ],
  };
  return (
   <div>
    <CanvasJSChart options={options} />
   </div>
  );
 }
}
