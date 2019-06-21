function greet(person) {
    return "Hello " + person.firstName + "!";
}
greet({ firstName: "Jason", lastName: "Hess" });
var user = { firstName: "Jason", lastName: "Hess" };
document.body.innerHTML = greet(user);
