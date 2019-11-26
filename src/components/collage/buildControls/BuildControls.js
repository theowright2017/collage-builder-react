import React from 'react';
import BuildControl from './buildControl/BuildControl';



const controls = [
  { label: "Portrait", type: 'portrait'},
  { label: "City", type: 'city'},
  { label: "Landscape", type: 'landscape'},
  { label: "Pet", type: 'pet'}
]

const buildControls = (props) => (

  <div>
    <p>Total Memory: </p>

    {controls.map(ctrl => {
      return <BuildControl
                key={ctrl.label}
                label={ctrl.label}/>
    })}



  </div>
)



export default buildControls;
