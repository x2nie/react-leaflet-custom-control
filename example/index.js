import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'

import Control from '../src'

const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 13,
}

class App extends Component {
  state = {
    viewport: DEFAULT_VIEWPORT,
  }

  handleClick = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }

  render() {
    return (
      <div>
        <h1>React-Leaflet-Custom-Contorl example</h1>
        <Map onViewportChanged={this.onViewportChanged} viewport={this.state.viewport}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          <Control position="bottomright">
            <button onClick={this.handleClick}>Reset View</button>
          </Control>
        </Map>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
