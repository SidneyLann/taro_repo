
import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { styled } from 'jcss/custom';

import './index.scss'

const View0 = styled(View) <{ height: string }>`
display: flex;
flex-direction: row;
height: ${props => props.height}px;
background-color: white;
`

const Text0 = styled(Text) <{ height2: string }>`
display: flex;
flex-direction: row;
height: ${props => props.height2};
color: red;
`
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
			<View0 height={800}>
				<Text0 height2={400} >Hello world!</Text0>
			</View0>
		)
	}
}

export default Index