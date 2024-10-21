import { Container } from "inversify";
import { Company, Employee } from "./company";
import { USER, COMPANY } from "./types";


const container = new Container();
container.bind(USER).to(Employee);
container.bind(COMPANY).to(Company);

export { container };
