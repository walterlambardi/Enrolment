import { formDataSchema } from '../../src/utils/yupSchema';

describe('Yup schema validation', () => {
  it('should validate a valid object', async () => {
    const validObject = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    const isValid = await formDataSchema.isValid(validObject);
    expect(isValid).toBe(true);
  });

  it('should not validate an object with missing required fields', async () => {
    const invalidObject = {
      firstName: 'John',
    };

    const isValid = await formDataSchema.isValid(invalidObject);
    expect(isValid).toBe(false);
  });

  it('should not validate an object with invalid email', async () => {
    const invalidObject = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid_email',
      password: 'password123',
    };

    const isValid = await formDataSchema.isValid(invalidObject);
    expect(isValid).toBe(false);
  });
});
