import { Pages } from '../enums/Pages';

export default {
  global: {
    customFallback: {
      message: 'Something went wrong:',
      btnCta: 'Try again',
    },
  },
  [Pages.CREATE_ACCOUNT]: {
    title: 'Create Your Account',
    subtitle:
      'You can be a parent, godparent, grandparent or even a favorite aunt. We’ll add the kids after!',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email Address',
    password: 'Password',
    footer:
      'By creating this account, I agree that I am a U.S. resident, 18 years or older with a valid bank account. I agree to Goalsetter’s',
    termsOfService: ' Terms of Service.',
    btnCta: 'CREATE FREE ACCOUNT',
  },
};
