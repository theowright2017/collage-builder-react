import React from "react"
import Aux from '../../HOC/Aux';

const layout = (props) => {




    return(
      <Aux>
        <p>Toolbar, SideDrawer, Backdrop</p>
        <main>
          {props.children}
        </main>


      </Aux>
    )
  }

export default layout;
