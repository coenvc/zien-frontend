export class User{

    id: number;
     firstName: String;
     lastName: String;
     infix: String;
     email: String;
     password: String;
     isModerator: Boolean;

  constructor(firstName?: String, lastName?: String, infix?: String, email?: String, password?: String, isModerator?: Boolean){

    this.firstName = firstName;
    this.lastName = lastName;
    this.infix = infix;
    this.email = email;
    this.password = password;
    this.isModerator = isModerator;
  }
}