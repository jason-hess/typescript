# TypeScript

## Installing TypeScript

```cmd
npm install -g typescript
```

Or locally:

```cmd
npm install --save-dev typescripts
```

## TypeScript

"In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause"

## JDoc Support

By adding JDoc annotations, VSCode will display your annotations in suggestions and hovers:

```ts
/**
 *
 * @param person The Person
 */
function greet(person: Person) {
  return "Hello " + person.firstName + "!";
}
```

## VS Code

You can enable this by setting "typescript.referencesCodeLens.enabled": true in the User Settings file.
To get the CodeLens in VSCode for TypeScript.
