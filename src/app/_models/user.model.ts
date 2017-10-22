export class User {
    memail: string;
    mpassword: string;
    mimage: string;
    mnickname: string;
    mregistype: number;

    constructor() { }

   public static isNull(user: User): boolean {
       return user.memail === null &&
           user.mpassword === null;
   }
  //   mEmail: string;
  //   mPassword: string;
  //   mImage: string;
  //   mNickname: string;
  //   mRegistype: number;
   //
  //   constructor() { }
   //
  //  public static isNull(user: User): boolean {
  //      return user.mEmail === null &&
  //          user.mPassword === null &&
  //          user.mImage === null &&
  //          user.mNickname === null &&
  //          user.mRegistype === null;
  //  }
}
