# @idrinth/typescript-language-from-yaml

This small project handles the conversion of transslation files from yaml to typescript. Install it and run the command `itlfy` to use it.

## check

The check command will check if the yaml files in your current working directory's `language` folder are valid and match. It  will error for unparseable files and keys not available in english, while  warning if keys are missing in other languages.

`ilfy check` or `itlfy chheck root-folder-name`

## generate

Generate provides typescript language files according to your specification. It only works in your current  working directory's `language` folder and will output to `ssrc/locales` by default.

Options:

- `--strict-types` apply strict types, so that typescript will error on build if the structures mismatch
- `--verbatim-module-syntax` will export the type as a named export instead of a default one
- `--simplified-hash-map` will convert the multi tiered object to a single level hash map for speed reasons.
- `--inject-default-language` will create a file based on the default language. Only works with `--simplified-hash-map` active at the same time.
- `--split` splits  the language files at the top level keys. This leads to smaller files when using dynamic imports. Usually you want `--no-translations-file` as well in case of splitting.
- `--no-translations-file` disables the  creation of a translation object containing all languages

## watch

Watching will watch one or more language folders and rebuild  the typescript files whenever the yaml files change.If you don't give it a root folder, it will assume the current working directory.

- `ilfy watch rootfolder1 rootfolder2`

## init

Generates a configuration file with the current values for  the given folder or folders.

## configuration

use a `.idrinth-typesscript-language-from-yaml.yml` file in the root of your project to configure the tool with defaults that can be overwritten by the command line.

```yaml
hasNoTranslationsFile: false
isSplit: false
originDirectory: language
isFailOnWarning: false
targetDirectory: src/locales
isStrictTypes: false
isVerbatimModuleSyntax: false
```
