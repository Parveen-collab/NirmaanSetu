import { indiaStatesAndDistricts } from "@/src/utils/indiaStatesAndDistricts"

/**
 * Returns all Indian states as dropdown options.
 * The list is sorted alphabetically by state name.
 */
export const getStateOptions = () =>
  Object.entries(indiaStatesAndDistricts)
    .map(([key, value]) => ({
      label: value.name,
      value: key
    }))
    .sort((a, b) =>
      a.label.localeCompare(b.label)
    )

/**
 * Returns district options for the selected state.
 *
 * @param stateKey - Unique key of the selected state.
 * @returns Array of district objects in { label, value } format.
 */
export const getDistrictOptions = (
  stateKey: string
) => {

  // Return empty array if no state is selected
  if (!stateKey) return []

  // Find state data using the provided state key
  const state =
    indiaStatesAndDistricts[stateKey]

  // Return empty array if state does not exist
  if (!state) return []

  // Convert district names into dropdown option format
  return state.districts.map(d => ({
    label: d,
    value: d
  }))
}