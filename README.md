# Gitignore and .env

## Dans gitignore, les fichiers suivants ne seront pas pushes :
```javscript
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 
# dependencies
/node_modules
/.pnp
.pnp.js
 
# testing
/coverage
 
# production
/build
 
# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
 
npm-debug.log*
yarn-debug.log*
yarn-error.log*
``` 

## .env 
```javascript
REACT_APP_API_URL=http://monApi.com
REACT_APP_API_TOKEN=1234votre-token!78
```
> Modele

<br> 

## .env.development.local

```javascript
REACT_APP_API_URL=http://localhost:1234/
REACT_APP_API_TOKEN=1234votre-token!78
```
> En developpement

<br> 

## .env.production.local
```javascript
REACT_APP_API_URL =https://api.openweathermap.org/data/2.5/weather?
REACT_APP_API_TOKEN =935335d81af45262ce48fc472c52fbc5
```
> En production

<br>

## Dans mon app
```javascript
const { REACT_APP_API_URL, REACT_APP_API_TOKEN } = process.env;
```



# Passer en environnement de prod :

```javscript
Npm run build
```

```javscript
npm install -g serve
```

```javscript
serve -s build
```

Or cd into build and 
```javscript
serve
```

# Publier un site en ligne

Installer surge
```javscript
npm install --global surge
```

Cd into build
```javscript
surge
```

 
