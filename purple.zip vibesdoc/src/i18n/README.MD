I18n generator

## Install

```bash
yarn
```

## Excel

The translations itself are generated from *excel/i18n.xlsx*. The first three columns can be used to organize the translations.
From them a unique key will be generated that can be used to access the translation.
The simplest way to use is to create xlsx file in google docs and share link. 

# Generation of files

## Generate once

```bash
yarn start
```

Just generates the translation files once.

## Watch for changes

```bash
yarn watch    # to continuously watch & generate
```

This generates all files once and starts watching on the excel file "excel/i18n.xlsx".
Whenever you hit save, the changes are compiled into typescript files in the realm of the client.

If the client is also started with "npm run dev" changes will be picked up automatically.

# Usage in the main project

There is two main options you have, depending on whether translation files have already been created or not.

## Add language

To add new language you need just to add new column "LANG_{Name}"

## No translation yet

You should mark fields for translation even if they are not being translated yet.

The todo function just returns the string, but this way we can easily find places that have not been translated yet.

```javascript
import { todo } from 'util/translate';

render() 
{
  return <h1>{ todo('Hello World') }</h1>
}
```

## Translation exists

```javascript
import { t } from 'util/translate';

render() 
{
  return <h1>{ t().ABOUTUS_HEADER_TITLE }</h1>
}
```

## Translation function

```javascript
import { t } from 'util/translate';

render() 
{
  return <h1>{ t().ABOUTUS_HEADER_TITLE(props.name) }</h1>
}
```
