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
  [Pages.LINK_BANK]: {
    title: 'Link your bank!',
    familyBank: 'Family banking',
    description:
      'Linking your bank lets you use all of Goalsetter’s amazing features. Every member of your family can save, gift, learn, earn, and spend money... smartly.',
    btnCta: 'LINK A BANK',
  },
  [Pages.TERMS_OF_SERVICE]: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text1:
      '1. Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.n. .',
    text2:
      '2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur.',
    text3:
      '3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};
