# Rock, Paper, Scissors

> Fun project to gain more Nuxt.js experience

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).


## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1366px

### Layout containers / components

- Modal
- Score board
- Selection Icons
  - Props
    - Action
      - "rock", "paper", or "scissors"
  - States
    - default (colored)
    - disabled (grey scale)

## Colors

### Primary

- Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
- Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
- Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
- Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
- Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)

### Neutral

- Dark Text: hsl(229, 25%, 31%)
- Score Text: hsl(229, 64%, 46%)
- Header Outline: hsl(217, 16%, 45%)

### Background

- Radial Gradient: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)

## Fonts

- Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- Weights: 600, 700

## Game Logic
- initialize game
  - check local storage for existing score
    - if score, reset score variable to local storage value
    - else, start score from zero
- User and computer make selections (rock, paper, or scissors)
  - computer is randomly selected from list
- if selections between user and computer are different:
  - [Paper beats Rock, Rock beats Scissors, Scissors beats Paper]
  - if user wins, add one to score
    - else if computer wins, subtract one from score
  - save score to local storage
- else if selections are the same
  - take no action
  - replay


