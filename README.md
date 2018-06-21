# eslint-plugin-teste

Teste

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-teste`:

```
$ npm install eslint-plugin-teste --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-teste` globally.

## Usage

Add `teste` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "teste"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "teste/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





