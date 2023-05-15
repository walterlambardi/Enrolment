import { submitFormData } from '../../src/api/apiService';

describe('submitFormData', () => {
  it('should resolve with successful response', async () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    const mockResponse = {
      status: '200',
      endPoint: 'https://api.com/addParent',
      payload: formData,
    };

    const result = await submitFormData(formData);
    expect(result).toEqual(mockResponse);
  });
});
