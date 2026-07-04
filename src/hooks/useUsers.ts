
import axios from "axios";


interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
}


export const registerUser = async (
  user: RegisterRequest,
  photo?: File
) => {
  const formData = new FormData();

  // Convert object to JSON string
  formData.append(
    "user",
    new Blob([JSON.stringify(user)], {
      type: "application/json",
    })
  );

  if (photo) {
    formData.append("photo", photo);
  }

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
    formData
  );

  return response.data;
};