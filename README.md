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

The TypeScript implementations CodeLens displays the number of implementors of an interface:

TypeScript implementations CodeLens

You can enable this by setting "typescript.implementationsCodeLens.enabled": true.

When you move or rename a file that is imported by other files in your TypeScript project, VS Code can automatically update all import paths that reference the moved file.

The typescript.updateImportsOnFileMove.enabled setting controls this behavior. Valid settings values are:

"prompt" - The default. Asks if paths should be updated for each file move.
"always" - Always automatically update paths.
"never" - Do not update paths automatically and do not prompt.

## Compiler

If you run `tsc` the TypeScript compiler will search the current folder and all subfolders for `.ts` files and compile them as a unit. It will also use the `tsconfig.json` in the current folder if it exists:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs"
  }
}
```
