import React, {Component} from "react"
import Aux from '../../HOC/Aux';
import BuildControls from '../../components/collage/buildControls/BuildControls'



class CollageBuilder extends Component {
  state = {
    photos: {
      portrait: 0,
      landscape: 0,
      city: 0,
      pet: 0
    }
  }

  render() {



    return(
      <Aux>
        <p>Modal</p>

        <BuildControls />

        <p>Collage</p>


      </Aux>

    )
  }
}

export default CollageBuilder;
