export const authOptions: any = {
  baseEndpoint: 'http://localhost:8080',
  login: {
    redirectDelay: 2000,
    endpoint: '/auth/sign-in',
  },
  register: {
    redirectDelay: 2000,
    endpoint: '/auth/sign-up',
  },
  logout: {
    redirectDelay: 2000,
    endpoint: '/auth/sign-out',
  },
  token: {
    key: 'token',
  },
};
