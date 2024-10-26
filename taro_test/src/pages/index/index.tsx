import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

class Index extends Component<PropsWithChildren> {

	componentDidMount() {
		console.log('componentDidMount')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	componentDidShow() {
		console.log('componentDidShow')
	}

	componentDidHide() {
		console.log('componentDidHide')
	}

	render() {
		return (
			<View style={{width: 400, height: 800, backgroundColor: 'green'}}>
				<Text style={{width: 200, height: 400, backgroundColor: 'red'}} >Hello world!</Text>
			</View>
		)
	}
}

export default Index