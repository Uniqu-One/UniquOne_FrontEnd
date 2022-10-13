export const SignupFormRegexUtil = {

  emailRegex:(email:string) => {
    const regex = /@./;
    return regex.test(email)
  }

}