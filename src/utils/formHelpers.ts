import { indiaStatesAndDistricts } from "@/src/utils/indiaStatesAndDistricts"


export const getStateOptions = () =>
  Object.entries(indiaStatesAndDistricts)
    .map(([key, value]) => ({
      label: value.name,
      value: key
    }))
    .sort((a, b) =>
      a.label.localeCompare(b.label)
    )

export const getDistrictOptions = (
  stateKey: string
) => {

  if (!stateKey) return []

  const state =
    indiaStatesAndDistricts[stateKey]

  if (!state) return []

  return state.districts.map(d => ({
    label: d,
    value: d
  }))
}