import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import {styled} from '../../../.linaria/custom';

import './index.scss'

const Text0 = styled(Text)<{ height: string}>`
display: flex;
flex-direction: row;
height: ${props => props.height};
`

class Index extends Component<PropsWithChildren> {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text0 height={30}>Hello world!</Text0>
      </View>
    )
  }
}

export default Index