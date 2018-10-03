// @flow
import React, { Component } from 'react'
import { TouchableOpacity, View, Keyboard, FlatList, TextInput, Text } from 'react-native'
import styles from './Styles/SearchBarStyle'
import { Colors } from '../Themes'
import { CandidateType } from '../Redux/CandidatesRedux'

type Props = {
  query: string,
  disabled?: boolean,
  placeholder: string,
  showSuggestions?: boolean,
  onChange: string => mixed,
  onChoose: string => mixed,
  suggestions: Array<CandidateType>
}

export const Suggestion = ({ name, id, onPress }: { name: string, id: number, onPress: number => mixed }) => (
  <TouchableOpacity onPress={() => onPress(id)} style={styles.suggestionBox}>
    <Text style={styles.suggestion}>{name}</Text>
  </TouchableOpacity>
)

class SearchBar extends Component<Props> {
  onChoose = (idCandidato: number) => {
    Keyboard.dismiss()
    this.props.onChoose(idCandidato)
  }

  render () {
    const { style, disabled, placeholder, query, onChange } = this.props
    const suggestions = this.props.showSuggestions ? this.props.suggestions : []
    return (
      <View style={[styles.container, style]}>
        <TextInput
          editable={!disabled}
          autoCorrect={false}
          underlineColorAndroid={'transparent'}
          onChangeText={onChange}
          value={query}
          placeholder={placeholder}
          placeholderTextColor={Colors.disabled}
          style={[styles.textInput, disabled && styles.disabledTextInput]}
        />
        {suggestions &&
          suggestions.length > 0 && (
            <FlatList
              keyboardShouldPersistTaps={'always'}
              style={styles.suggestions}
              keyExtractor={item => `${item.idCandidatura + item.idCandidato}`}
              data={suggestions}
              renderItem={({ item }) => <Suggestion onPress={this.onChoose} name={item.nome} id={item.idCandidato} />}
            />
          )}
      </View>
    )
  }
}

export default SearchBar
