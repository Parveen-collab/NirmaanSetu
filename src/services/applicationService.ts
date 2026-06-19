import axios from "axios";

interface ApplyProjectPayload {
  projectRoleId: number;
  coverLetter: string;
}

export const applyForProject = async (
  payload: ApplyProjectPayload
): Promise<string> => {
  try {
    const response = await axios.post(
      "/api/v1/applications/apply",
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Error applying for project:", error);
    throw error;
  }
};