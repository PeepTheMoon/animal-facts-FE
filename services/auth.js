import { post } from './request';

export const fetchSignup = (username, password, profileImage) =>
  post('/api/v1/auth/signup', { username, password, profileImage });
