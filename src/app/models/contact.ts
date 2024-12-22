export class Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  phone?: string;

  constructor(name, email, phone, message) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.message = message;
  }

}
