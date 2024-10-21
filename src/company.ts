import { inject, injectable } from 'inversify';
import { ICompany, IUser } from './interface';
import { USER } from './types';


@injectable()
class Employee implements IUser {
	public getName(name: string): string {
		return name;
	}

	public getAge(age: number): number {
		return age;
	}
}


@injectable()
class Company implements ICompany {
	public employee: IUser;

	constructor (
		@inject(USER) employee: IUser
	) {
		this.employee = employee;
	}

	public getEmployee(): void {
		console.log(this.employee.getName('John') + ' ' + this.employee.getAge(25))
	}
}


export { Employee, Company };
