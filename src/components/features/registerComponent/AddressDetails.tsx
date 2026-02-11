import Input from '@/src/components/common/Input'

interface AddressFormData {
  area: string
  building: string
  landmark: string
  city: string
  state: string
  pincode: string
}

interface Props {
  formData: AddressFormData
  setFormData: React.Dispatch<React.SetStateAction<AddressFormData>>
}

export default function AddressDetails({ formData, setFormData }: Props) {

  const handleChange = (field: keyof AddressFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div>
      <div className="space-y-4 mt-4">
        <h1>Permanent Address</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Area"
            placeholder="Enter Area"
            value={formData.area}
            validation="text"
            onChange={(e) => handleChange('area', e.target.value)}
          />

          <Input
            label="Building"
            placeholder="Enter Building"
            value={formData.building}
            validation="text"
            onChange={(e) => handleChange('building', e.target.value)}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            label="Landmark"
            placeholder="Enter Landmark"
            value={formData.landmark}
            validation="text"
            onChange={(e) => handleChange('landmark', e.target.value)}
          />

          <Input
            label="City"
            placeholder="Enter City"
            value={formData.city}
            validation="text"
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            label="State"
            placeholder="Enter State"
            value={formData.state}
            validation="text"
            onChange={(e) => handleChange('state', e.target.value)}
          />

          <Input
            label="Pincode"
            placeholder="Enter 6-digit Pincode"
            value={formData.pincode}
            validation="number"
            maxLength={6}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/\D/g, '').slice(0, 6)
              handleChange('pincode', cleaned)
            }}
          />
        </div>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
        />
        <label>
          Same as Permanent Address
        </label>
      </div>

      <div className="space-y-4 mt-4">
        <h1>Current Address</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Area"
            placeholder="Enter Area"
            value={formData.area}
            validation="text"
            onChange={(e) => handleChange('area', e.target.value)}
          />

          <Input
            label="Building"
            placeholder="Enter Building"
            value={formData.building}
            validation="text"
            onChange={(e) => handleChange('building', e.target.value)}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            label="Landmark"
            placeholder="Enter Landmark"
            value={formData.landmark}
            validation="text"
            onChange={(e) => handleChange('landmark', e.target.value)}
          />

          <Input
            label="City"
            placeholder="Enter City"
            value={formData.city}
            validation="text"
            onChange={(e) => handleChange('city', e.target.value)}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            label="State"
            placeholder="Enter State"
            value={formData.state}
            validation="text"
            onChange={(e) => handleChange('state', e.target.value)}
          />

          <Input
            label="Pincode"
            placeholder="Enter 6-digit Pincode"
            value={formData.pincode}
            validation="number"
            maxLength={6}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/\D/g, '').slice(0, 6)
              handleChange('pincode', cleaned)
            }}
          />
        </div>

      </div>
    </div>


  )
}
