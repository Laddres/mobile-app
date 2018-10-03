import { NavigationActions, StackActions } from 'react-navigation'

const resetAction = ({ routeName, actions }) =>
  StackActions.reset({
    index: 0,
    key: null,
    actions: actions || [NavigationActions.navigate({ routeName })]
  })

export { resetAction }
