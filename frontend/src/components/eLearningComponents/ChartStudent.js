import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class App extends Component {
 render() {
  const options = {
   animationEnabled: true,
   title: {
    text: 'Users',
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
      { y: this.props.students, label: 'Administrator' },
      { y: this.props.customers, label: 'General Users' },
     ],
    },
   ],
  };
  return (
   <div className="kh round">
    <CanvasJSChart options={options} />
   </div>
  );
 }
}
