'use client'

import Input from '@/src/components/common/Input'
import Select from '@/src/components/common/Select'
import { useState } from 'react'

import {
  getStateOptions,
  getDistrictOptions
} from '@/src/utils/formHelpers'

/* =========================
   TYPES
========================= */

interface Address {
  area: string
  building: string
  landmark: string
  district: string
  state: string
  pincode: string
}

interface AddressFormData {
  permanent: Address
  current: Address
}

interface Props {
  formData: AddressFormData
  setFormData: React.Dispatch<
    React.SetStateAction<AddressFormData>
  >
}

/* =========================
   COMPONENT
========================= */

export default function AddressDetailForm({
  formData,
  setFormData
}: Props) {

  const stateOptions = getStateOptions()

  const permanentDistrictOptions =
    getDistrictOptions(
      formData.permanent.state
    )

  const currentDistrictOptions =
    getDistrictOptions(
      formData.current.state
    )

  /* =========================
     SAME AS PERMANENT
  ========================= */

  const [sameAsPermanent, setSameAsPermanent] =
    useState(false)

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (
    type: 'permanent' | 'current',
    field: keyof Address,
    value: string
  ) => {

    setFormData(prev => {

      const updated = {
        ...prev,
        [type]: {
          ...prev[type],
          [field]: value
        }
      }

      /* Sync current if sameAsPermanent enabled */

      if (sameAsPermanent && type === 'permanent') {
        updated.current = {
          ...updated.permanent
        }
      }

      return updated
    })
  }

  /* =========================
     HANDLE SAME AS PERMANENT
  ========================= */

  const handleSameAsPermanent = (
    checked: boolean
  ) => {

    setSameAsPermanent(checked)

    if (checked) {

      setFormData(prev => ({
        ...prev,
        current: {
          ...prev.permanent
        }
      }))
    }
  }

  /* =========================
     UI
  ========================= */

  return (

    <div className="space-y-6">

      {/* =========================
         PERMANENT ADDRESS
      ========================= */}

      <div className="space-y-4">

        <h2 className="text-lg font-semibold">
          Permanent Address
        </h2>

        {/* State + District */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Select
            label="State"
            value={formData.permanent.state}
            options={stateOptions}
            validation="text"
            onChange={(e) =>
              handleChange(
                'permanent',
                'state',
                e.target.value
              )
            }
          />

          <Select
            label="District"
            value={formData.permanent.district}
            options={permanentDistrictOptions}
            validation="text"
            disabled={!formData.permanent.state}
            onChange={(e) =>
              handleChange(
                'permanent',
                'district',
                e.target.value
              )
            }
          />

          {/* <Input
            label="District"
            placeholder="Enter District"
            value={formData.permanent.district}
            validation="text"
            onChange={(e) =>
              handleChange(
                'permanent',
                'district',
                e.target.value
              )
            }
          /> */}

        </div>

        {/* Landmark + Pincode */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Input
            label="Landmark"
            placeholder="Enter Landmark"
            value={formData.permanent.landmark}
            validation="text"
            required={false}
            onChange={(e) =>
              handleChange(
                'permanent',
                'landmark',
                e.target.value
              )
            }
          />

          <Input
            label="Pincode"
            placeholder="Enter 6-digit Pincode"
            value={formData.permanent.pincode}
            validation="number"
            maxLength={6}
            onChange={(e) => {

              const cleaned =
                e.target.value
                  .replace(/\D/g, '')
                  .slice(0, 6)

              handleChange(
                'permanent',
                'pincode',
                cleaned
              )
            }}
          />

        </div>

        {/* Area + Building */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Input
            label="Area"
            placeholder="Enter Area"
            value={formData.permanent.area}
            validation="text"
            onChange={(e) =>
              handleChange(
                'permanent',
                'area',
                e.target.value
              )
            }
          />

          <Input
            label="Building"
            placeholder="Enter Building"
            value={formData.permanent.building}
            validation="text"
            onChange={(e) =>
              handleChange(
                'permanent',
                'building',
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* =========================
         SAME AS PERMANENT
      ========================= */}

      <div className="flex items-center gap-2">

        <input
          type="checkbox"
          checked={sameAsPermanent}
          onChange={(e) =>
            handleSameAsPermanent(
              e.target.checked
            )
          }
        />

        <label>
          Same as Permanent Address
        </label>

      </div>

      {/* =========================
         CURRENT ADDRESS
      ========================= */}

      <div className="space-y-4">

        <h2 className="text-lg font-semibold">
          Current Address
        </h2>

        {/* State + District */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Select
            label="State"
            value={formData.current.state}
            options={stateOptions}
            validation="text"
            disabled={sameAsPermanent}
            onChange={(e) =>
              handleChange(
                'current',
                'state',
                e.target.value
              )
            }
          />

          <Select
            label="District"
            value={formData.current.district}
            options={currentDistrictOptions}
            validation="text"
            disabled={sameAsPermanent || !formData.current.state}
            onChange={(e) =>
              handleChange(
                'current',
                'district',
                e.target.value
              )
            }
          />

        </div>

        {/* Landmark + Pincode */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Input
            label="Landmark"
            placeholder="Enter Landmark"
            value={formData.current.landmark}
            validation="text"
            required={false}
            disabled={sameAsPermanent}
            onChange={(e) =>
              handleChange(
                'current',
                'landmark',
                e.target.value
              )
            }
          />

          <Input
            label="Pincode"
            placeholder="Enter 6-digit Pincode"
            value={formData.current.pincode}
            validation="number"
            maxLength={6}
            disabled={sameAsPermanent}
            onChange={(e) => {

              const cleaned =
                e.target.value
                  .replace(/\D/g, '')
                  .slice(0, 6)

              handleChange(
                'current',
                'pincode',
                cleaned
              )
            }}
          />

        </div>

        {/* Area + Building */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Input
            label="Area"
            placeholder="Enter Area"
            value={formData.current.area}
            validation="text"
            disabled={sameAsPermanent}
            onChange={(e) =>
              handleChange(
                'current',
                'area',
                e.target.value
              )
            }
          />

          <Input
            label="Building"
            placeholder="Enter Building"
            value={formData.current.building}
            validation="text"
            disabled={sameAsPermanent}
            onChange={(e) =>
              handleChange(
                'current',
                'building',
                e.target.value
              )
            }
          />

        </div>

      </div>

    </div>

  )
}