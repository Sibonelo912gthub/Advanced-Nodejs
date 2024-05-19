export class utils {
  public MAX_TOKEN_TIME = 5 * 60 * 1000;
  static generateVerificationToken(digit: number = 6): string {
    const digits = "0123456789";
    let otp = "";
    for (let i = 0; i < digit; i++) {
      otp += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return otp;
  }
}
