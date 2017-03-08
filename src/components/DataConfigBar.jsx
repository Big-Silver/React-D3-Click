import React from 'react'
import { connect } from 'react-redux'
import JsonWindow from './JsonWindow.jsx'

const mapStateToProps = state => ({
	chartData: state.chartData,
	showJsonWindow: state.config.showJsonWindow,
	transformLabels: data => data.map(point => {
		const newPoint = {}
		newPoint[state.config.labels.x] = point.x
		newPoint[state.config.labels.y] = point.y
		return newPoint
	})
})

const mapDispatchToProps = dispatch => ({
	toggleJsonWindow: () => dispatch({
		type: 'TOGGLE_JSON_WINDOW'
	})
})

const DataConfigBar = ({chartData, transformLabels}) => {
	return (
		<div className="data-config-bar">
			{<JsonWindow chartData={transformLabels(chartData)} keysToShow={['x', 'y']} />}
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataConfigBar)
