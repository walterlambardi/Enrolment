import { EndPoints } from '../enums/endPoints';
import { FormData } from '../pages/CreateAccount/CreateAccount';

interface ApiResponse {
  status: string;
  endPoint: string;
  payload: FormData;
}

export const submitFormData = async (
  formData: FormData,
): Promise<ApiResponse> => {
  const { addParent } = EndPoints;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: '200', endPoint: addParent, payload: formData });
      // reject(new Error('Failed to submit form data'));
    }, 1000);
  });
};
