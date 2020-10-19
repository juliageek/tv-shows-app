# tv-shows-app

- [1. Project scripts](#1-project-scripts)
- [2. About the project](#2-about-the-project)
- [3. Component structure](#3-component-structure)
- [4. Unit testing](#4-unit-testing)

## 1.Project scripts
## Project setup
```
yarn install
```

## Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 2. About the project

The project is built using a somewhat outdated architecture, with Vue 2/Vuex. There were 2 reasons why I chose this over the more modern Vue 3/ TS/ reactive data:
+ speed; I am familiar with this architecture more than with the new one, and I didn't want to risk missing the deadline because of the added time to learn and get comfortable with all the new things in Vue3 (but I plan on doing so shortly :)))
+ trying to make the reviewer's life easy (as I didn't know how much they would know of Vue 3); it's easier to review something you know (at least for me)

For the UI Component library, I chose to use Vue Bootstrap, because Vuetify seemed to be too heavyweight for this project.

## 3. Component structure

The code has 2 main "smart" components, **Shows.vue** and **FilterBar.vue**. These 2 do all the heavy lifting in terms of communicating with the store (shows). The are also passing data down to their children. The children emit events back to them and the parents act on those events.

## 4. Unit testing

I used Jest and Vue test utils for unit testing the components. I aimed to test all the components, and by testing them, cover the Vuex store. I got a coverage of 95% (% of statements).