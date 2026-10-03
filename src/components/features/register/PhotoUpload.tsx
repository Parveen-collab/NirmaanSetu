import Input from "@/src/components/common/Input";

export default function LivePhotoUpload({ formData, setFormData }: any) {
  return (
    <div className="mt-6">
      <label className="block text-sm font-medium mb-2">
        Upload Photo (optional)
      </label>
      <Input
        type="file"
        className="input"
        onChange={(e) =>
          setFormData({ ...formData, photo: e.target.files?.[0] })
        }
      />
    </div>
  );
}
