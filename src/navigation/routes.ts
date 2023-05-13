import { Pages } from '../enums/Pages';
import CreateAccount from '../pages/CreateAccount';
import LinkBank from '../pages/LinkBank';
import TermsOfService from '../pages/TermsOfService';

export default {
  [Pages.CREATE_ACCOUNT]: CreateAccount,
  [Pages.TERMS_OF_SERVICE]: TermsOfService,
  [Pages.LINK_BANK]: LinkBank,
};
