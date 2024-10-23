import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import {styled} from 'jcss/custom';

import './index.scss'

const View0 = styled(View)<{ height: string}>`
display: flex;
flex-direction: row;
height: ${props => props.height};
background-color: green;
`

const Text0 = styled(Text)<{ height: string}>`
display: flex;
flex-direction: row;
height: ${props => props.height};
color: red;
`
class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View0 height={200}>
        <Text0 height={100}>Hello world!</Text0>
      </View0>
    )
  }
}

export default Index