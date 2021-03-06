import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import PaletteList from './Components/PaletteList'
import SingleColorPalette from './Components/SingleColorPalette'
import seedColors from './Components/seedColors'
import { generatePalette } from './Components/ColorHelpers'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.findPalette = this.findPalette.bind(this)
  }

  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>

        <Route
          exact
          path="/"
          render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />

        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => <Palette
            palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )} />} />

        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette />} />

      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[0])} />
      // </div>
    );
  }
}

export default App;