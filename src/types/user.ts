export interface IUser extends Document {
  username: String;
  email: String;
  password: String;
  resetPasswordToken: String;
  resetPasswordExpire: Date;
  matchPassword: Function;
  getSignedToken: Function;
}
