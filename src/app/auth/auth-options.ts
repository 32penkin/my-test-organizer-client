export const authOptions: any = {
  baseEndpoint: 'http://localhost:8080',
  login: {
    endpoint: '/auth/sign-in',
  },
  register: {
    endpoint: '/auth/sign-up',
  },
  logout: {
    endpoint: '/auth/sign-out',
  },
  requestPass: {
    endpoint: '/auth/request-pass',
  },
  resetPass: {
    endpoint: '/auth/reset-pass',
  },
};
