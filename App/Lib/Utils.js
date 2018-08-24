import { Alert, Linking } from 'react-native'

export const getImageHitSlop = (width, height) => {
  const clamp = (base, min, max) => Math.max(Math.min(base, max), min)
  const minWidthByMaterialDesign = 40
  const minHeightByMaterialDesign = 40
  const diffWidth = clamp(minWidthByMaterialDesign - width, 0, minWidthByMaterialDesign)
  const diffHeight = clamp(minHeightByMaterialDesign - height, 0, minHeightByMaterialDesign)
  const horizontalMargin = diffWidth / 2
  const verticalMargin = diffHeight / 2

  return {
    left: horizontalMargin,
    right: horizontalMargin,
    top: verticalMargin,
    bottom: verticalMargin
  }
}

export const developmentAlert = () => Alert.alert('Em desenvolvimento', 'Funcionalidade em desenvolvimento')

export const openExternalApp = (url: string) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url)
    } else {
      console.log("Don't know how to open URI: " + url)
    }
  })
}

export const generateProjectProposalKey = (id, year, role) => `${id}.${year}.${role}`
