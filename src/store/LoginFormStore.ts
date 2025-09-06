import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { apiService } from '../services/ApiService';

@singleton()
@Store()
// eslint-disable-next-line import/prefer-default-export
export class LoginFormStore {
  email = '';

  password = '';

  error = false;

  accessToken = '';

  // eslint-disable-next-line class-methods-use-this
  get valid() {
    return true;
  }

  @Action()
  changeEmail(email: string) {
    this.email = email;
  }

  @Action()
  changePassword(password: string) {
    this.password = password;
  }

  @Action()
  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.error = false;
    this.accessToken = '';
  }

  async lmsLogin() {
    try {
      const accessToken = await apiService.lmsLogin({
        email: this.email,
        password: this.password,
      });

      this.setAccessToken(accessToken);
    } catch (e) {
      this.setError();
    }
  }
}
