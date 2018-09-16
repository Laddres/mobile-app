// @flow
import * as React from 'react'
import CardContainer from './CardContainer'
import IssueItem from './IssueItem'

type Props = {
  issues: Array<any>,
  fetching: boolean
}

export default class IssuePositioningCard extends React.Component<Props> {
  render () {
    const { issues, fetching } = this.props
    return (
      <CardContainer fetching={fetching}>
        {issues &&
          issues.map((issue, key) => (
            <IssueItem issue={issue} key={issue.id} onPress={() => {}} separator={key !== issues.length - 1} />
          ))}
      </CardContainer>
    )
  }
}
