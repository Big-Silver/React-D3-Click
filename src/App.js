import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import './App.css'
import MainChart from './components/MainChart.jsx'
import DataConfigBar from './components/DataConfigBar.jsx'
import ChartConfigBar from './components/ChartConfigBar.jsx'
import Tooltip from './components/Tooltip.jsx'

class App extends Component {
	render() {
		return (
			<div className="App">
				<AppBar className="title-bar" title="ReactJS D3.js Project"/>
				<div className="content">
					<div className="primary-container">
						<ChartConfigBar/>
						<div className="main-chart-container">
							<MainChart/>
							<Tooltip/>
							<div className="instructions">Click anywhere on the chart to draw points. Right click on any point to remove it.
							</div>
						</div>
					</div>
					<DataConfigBar/>
				</div>
			</div>
		)
	}
}

export default App
