import { Person } from "./greeter";
/**
 *
 * @param person The Person
 */
export function greet(person: Person) {
    return "Hello " + person.firstName + "!";
}
