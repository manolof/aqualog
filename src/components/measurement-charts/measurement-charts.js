import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2';

import { MeasurementsModel } from '../../models/measurements';
import { formatDate } from '../../shared/helpers';

class MeasurementChartsComponent extends Component {
	render() {
		const { state } = this.props;
		const [limits] = state.limits;

		const keys = ['NH3', 'NO2', 'NO3', 'pH', 'KH', 'GH', 'CL2'];
		const colors = [
			'#01FF70',
			'#B10DC9',
			'#FF851B',
			'#39CCCC',
			'#7FDBFF',
			'#3D9970',
			'#FFDC00',
		];

		const validMeasurementItems = (key) => state.items
			.filter((item) => {
				return item.values[key.toLowerCase()] !== null;
			});

		const measurementChartData = keys.map((key, i) => {
			return {
				labels: validMeasurementItems(key)
					.map((item) => formatDate(item.date, `MMM DD`)),
				datasets: [
					{
						label: key,
						data: validMeasurementItems(key)
							.map((item) => item.values[key.toLowerCase()]),
						fill: false,
						borderColor: colors[i],
						lineTension: 0,
					},
					{
						// TODO WIP
						label: 'Min',
						data: limits && validMeasurementItems(key)
							.map(() => limits.values[key.toLowerCase()].min),
						hidden: limits && limits.values[key.toLowerCase()].min === 0,
						fill: false,
						radius: 0,
						borderColor: '#ff3860',
						borderWidth: 1,
						backgroundColor: 'rgba(0,0,0,0.1)'
					},
					{
						// TODO WIP
						label: 'Max',
						data: limits && validMeasurementItems(key)
							.map(() => limits.values[key.toLowerCase()].max),
						fill: false,
						radius: 0,
						borderColor: '#ff3860',
						borderWidth: 1,
						backgroundColor: 'rgba(0,0,0,0.1)'
					},
				],
			};
		});

		const options = {
			legend: {
				display: false,
			},
		};

		return (
			<Fragment>
				<div className='columns'>
					{
						measurementChartData
							.slice(0, 3)
							.map((data, i) => (
									<div key={i} className='column is-4'>
										<h5 className='has-text-centered is-size-7'>{data.datasets[0].label}</h5>
										<Line
											data={data}
											height={150}
											options={options}
										/>
									</div>
								)
							)
					}
				</div>
				<div className='columns'>
					{
						measurementChartData
							.slice(3)
							.map((data, i) => (
									<div key={i} className='column is-3'>
										<h5 className='has-text-centered is-size-7'>{data.datasets[0].label}</h5>
										<Line
											data={data}
											height={150}
											options={options}
										/>
									</div>
								)
							)
					}
				</div>
			</Fragment>
		);
	}
}

MeasurementChartsComponent.propTypes = {
	state: MeasurementsModel.isRequired,
};

export {
	MeasurementChartsComponent,
};
