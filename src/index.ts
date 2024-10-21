import "reflect-metadata";
import { ICompany } from "./interface";
import { container } from "./inversely.config";
import { COMPANY } from "./types";

const company = container.get<ICompany>(COMPANY);
console.log(company.getEmployee()); 