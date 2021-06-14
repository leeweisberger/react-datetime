import memoizeOne from 'memoize-one';
import * as React from 'react'
import { DBBotDeployment, DeploymentOrders, Order } from '../../../../lambdas/model.types';
import { Tabs, Tab } from '../../components';
import { BtDeployment } from '../../utils/Bt.types';
import AutoChart from './AutoChart';
import styles from './_DeploymentCharts.module.css';

interface DeploymentChartsProps {
	deployment: BtDeployment,
	exchangeProvider: 'bitfinex',
	selector?: 'tabs' | 'dropdown'
}

export default class DeploymentCharts extends React.Component<DeploymentChartsProps> {
	state = {
		activeSymbol: this.props.deployment.symbols[0]
	}

	render() {
		const { runInterval, orders } = this.props.deployment;
		const exchange = this.props.exchangeProvider;

		return (
			<div className={styles.container}>
				<div className={styles.tabs}>
					{ this.renderSelector() }
				</div>
				<div className={styles.chart}>
					<AutoChart
						symbol={this.state.activeSymbol}
						exchange={exchange}
						interval={runInterval}
						orders={this.getActiveSymbolOrders(orders)}
					/>
				</div>
			</div>
		)
	}

	renderSelector() {
		const { deployment, selector } = this.props;
		
		if( selector === 'dropdown' ){
			return (
				<select value={this.state.activeSymbol}
					onChange={ (e:React.ChangeEvent<HTMLSelectElement>) => this.setState({activeSymbol: e.target.value})}>
					{deployment.symbols.map((symbol: string) => (
						<option key={symbol} value={symbol}>{symbol}</option>
					))}
					</select>
			)
		}
		else {
			return (
				<Tabs active={this.state.activeSymbol}
					onChange={(activeSymbol: string) => this.setState({ activeSymbol })}>
					{deployment.symbols.map((symbol: string) => (
						<Tab key={symbol} id={symbol}>{symbol}</Tab>
					))}
				</Tabs>
			);
		}
	}

	getActiveSymbolOrders(orders: DeploymentOrders ): Order[] {
		return getSymbolOrders( orders, this.state.activeSymbol );
	}
}

const getSymbolOrders = memoizeOne( (orders: DeploymentOrders, symbol: string ) => {
	return Object.values(orders.items).filter((order: Order) => (
		order.symbol === symbol
	));
});
