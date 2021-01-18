export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    tel:string;

    constructor(name: string, username: string, email: string, password: string,tel:string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
        this.tel=tel;
    }
}
