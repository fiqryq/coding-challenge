class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  validateEmail(email) {
    const validator = email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (validator) return true;
    else return false;
  }

  validatePassword(password) {
    const validator = password.match(/^[A-Za-z]\w{7,14}$/);
    if (validator) return true;
    else return false;
  }

  signUp(name, email, password) {
    const isEmailValidated = email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    const isPasswordValidated = password.match(/^(?=.*\d).{8,}$/);
    if (isEmailValidated && isPasswordValidated && name) {
      console.log("User berhasil register");
    } else {
      console.log("Mohon input password dan email yang benar");
    }
  }

  login(name, email) {
    const isEmailValidated = email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (isEmailValidated && name) {
      console.log("User berhasil login");
    } else {
      console.log("User gagal login");
    }
  }
}

const azharie = new User();
console.log(azharie.signUp("azharie", "azharie@mail.com", "12345xxx"));
console.log(azharie.validateEmail("sdfs"));
console.log(azharie.login("azharie", "azharie@mail.com"));

const hasan = new User();
console.log(hasan.signUp("hasan", "fafafa", "3233"));
console.log(hasan.validateEmail("hasan@mail.com"));
console.log(hasan.login("hasan", "12345xxx"));
