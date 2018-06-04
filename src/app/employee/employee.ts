export class Employee {
  id: number;
  name: string;
  username: string;
  pviname: string;
  email: string;
  title: string;
  extension: string;
  manager: string;

  constructor(id: number, name: string, username: string, pviname: string, email: string, title: string, extension: string, manager: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.pviname = pviname;
    this.email = email;
    this.title = title;
    this.extension = extension;
    this.manager = manager;
  }
}