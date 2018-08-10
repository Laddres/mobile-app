// @flow
import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './Styles/SearchBarStyle'

type Props = {
  placeholder: string
}

class SearchBar extends Component<Props> {
  render () {
    return <TextInput placeholder={this.props.placeholder} style={styles.input} />
  }
}

export default SearchBar
