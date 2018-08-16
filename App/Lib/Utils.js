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
