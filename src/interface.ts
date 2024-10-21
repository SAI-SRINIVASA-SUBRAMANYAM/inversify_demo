export interface IUser {
	getName(name: string): string;
	getAge(age: number): number;
}

export interface ICompany {
	getEmployee(): void;
}