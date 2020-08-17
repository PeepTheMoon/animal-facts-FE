// import { post } from './request';

// export const fetchSignup = (username, password, profileImage) =>
//   post('/api/v1/auth/signup', { username, password, profileImage });

export const fetchSignup = (username, password, profileImage) => {
  return fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password, profileImage })
  })
    .then(res => res.json());
};
