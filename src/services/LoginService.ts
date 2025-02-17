const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const LoginService = {
  signIn: () => {
    const loginPromise = new Promise<{ status: number; token: string }>(
      (resolve) => {
        setTimeout(() => resolve({ status: 200, token: fakeToken }), 3000);
      }
    );

    return loginPromise;
  },
  signUp: () => "MOCK SIGN UP",
};

export default LoginService;
