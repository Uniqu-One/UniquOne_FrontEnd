export const SignupFormRegexUtil = {

  emailAuth:(email:string) => {
    const regex = /@./;
    return regex.test(email)
  },
  passwordAuth:()=>{}

}