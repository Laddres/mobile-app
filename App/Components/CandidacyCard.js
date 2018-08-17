// @flow
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/CandidacyCardStyle'

type Props = {
  role: string,
  party: string,
  electionName: string,
  electionYear: string,
  city: string,
  state: string,
  allianceName: string,
  allianceParties: string,
  result: string,
  onPress: () => void
}

class CandidacyCard extends Component<Props> {
  render () {
    const {
      role,
      party,
      electionName,
      electionYear,
      city,
      state,
      allianceName,
      allianceParties,
      result,
      onPress
    } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.role}>
            <Text style={[styles.title, styles.yellow]}>CARGO</Text>
            <Text style={[styles.headerText, styles.yellow]}>{role}</Text>
          </View>
          <View style={styles.party}>
            <Text style={[styles.title, styles.textRight]}>PARTIDO</Text>
            <Text style={[styles.headerText, styles.textRight]}>{party}</Text>
          </View>
        </View>
        <View style={styles.headerSeparator} />
        <View style={styles.body}>
          <View style={styles.info}>
            <Text style={styles.title}>{electionName}</Text>
            <Text style={styles.bodyText}>{electionYear}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>LOCAL</Text>
            <Text style={styles.bodyText}>{state ? (city ? `${city}, ${state}` : state) : 'Brasil'}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>COLIGAÇÃO</Text>
            <Text style={styles.bodyText}>{allianceName}</Text>
            <Text style={styles.bodyText}>{allianceParties}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>RESULTADO</Text>
            <Text style={styles.bodyText}>{result}</Text>
          </View>
        </View>
        {result === 'Eleito' && (
          <View style={styles.performance}>
            <View style={styles.performanceSeparator} />
            <TouchableOpacity style={styles.performanceButton} onPress={onPress}>
              <Text style={[styles.performanceText, styles.textCenter]}>ATUAÇÃO</Text>
              <Image source={Images.chevronDown} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

// const CandidacyCard = ({
//   role,
//   party,
//   electionName,
//   electionYear,
//   city,
//   state,
//   allianceName,
//   allianceParties,
//   result,
//   onPress,
// }) => (
//   <View style={styles.container}>
//     <View style={styles.header}>
//       <View style={styles.role}>
//         <Text style={[styles.title, styles.yellow]}>CARGO</Text>
//         <Text style={[styles.headerText, styles.yellow]}>{role}</Text>
//       </View>
//       <View style={styles.party}>
//         <Text style={[styles.title, styles.textRight]}>PARTIDO</Text>
//         <Text style={[styles.headerText, styles.textRight]}>{party}</Text>
//       </View>
//     </View>
//     <View style={styles.headerSeparator}></View>
//     <View style={styles.body}>
//       <View style={styles.info}>
//         <Text style={styles.title}>{electionName}</Text>
//         <Text style={styles.bodyText}>{electionYear}</Text>
//       </View>
//       <View style={styles.info}>
//         <Text style={styles.title}>LOCAL</Text>
//         <Text style={styles.bodyText}>
//           {state
//             ? city
//               ? `${city}, ${state}`
//               : state
//             : 'Brasil'}
//         </Text>
//       </View>
//       <View style={styles.info}>
//         <Text style={styles.title}>COLIGAÇÃO</Text>
//         <Text style={styles.bodyText}>{allianceName}</Text>
//         <Text style={styles.bodyText}>{allianceParties}</Text>
//       </View>
//       <View style={styles.info}>
//         <Text style={styles.title}>RESULTADO</Text>
//         <Text style={styles.bodyText}>{result}</Text>
//       </View>
//     </View>
//     {result === 'Eleito' &&
//       <View style={styles.performance}>
//         <View style={styles.performanceSeparator}></View>
//         <TouchableOpacity style={styles.performanceButton} onPress={onPress}>
//           <Text style={[styles.performanceText, styles.textCenter]}>ATUAÇÃO</Text>
//           <Image source={Images.chevronDown} />
//         </TouchableOpacity>
//       </View>
//     }
//   </View>
// )

export default CandidacyCard
