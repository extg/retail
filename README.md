# Retail

```bash
git clone https://github.com/extg/retail && cd retail
```

```bash
cp .env.example .env

yarn && yarn server
```


## Features

* React
* Redux

## TODO

* [husky] + [prettier] (warrnings при сборке)
* eslint на сервере
* [stylelint]
* SSR (isomorphic) [react-isomorphic-starterkit]
* CSS
  * CSS Modules
    * SCSS
    * css-next
    * [css-modules-part-3-react]
  * CSS in JS
    * [styled-jss]
    * [babel-plugin-styled-jss]
    * [jss]
    * [react-css-modules]
    * [recompose] [why-the-hipsters-recompose-everything]
* Иконки.
  * Что лучше иконочный шрифт или svg напрямую в страницу инлайнить
  * [fontgen-loader]
  * Smth else?
* оптимизация сборки https://survivejs.com/webpack/optimizing/performance/
* авторизация https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt



[CSS Modules]: https://github.com/webpack-contrib/css-loader#css-modules
[webpack clean plugin]: https://github.com/johnagan/clean-webpack-plugin
[styled-jss]: https://github.com/cssinjs/styled-jss
[babel-plugin-styled-jss]: https://github.com/lttb/babel-plugin-styled-jss
[jss]: https://github.com/cssinjs/jss
[react-css-modules]: https://github.com/gajus/react-css-modules
[webpack-manifest-plugin]: https://github.com/danethurber/webpack-manifest-plugin
[recompose]: https://github.com/acdlite/recompose
[why-the-hipsters-recompose-everything]: https://medium.com/javascript-inside/why-the-hipsters-recompose-everything-23ac08748198
[rebass]: https://github.com/jxnblk/rebass
[rebass-recomposed]: https://github.com/jxnblk/rebass-recomposed
[css-modules-part-3-react]: https://css-tricks.com/css-modules-part-3-react/
[prettier]: https://github.com/prettier/prettier
[husky]: https://github.com/typicode/husky
[eslint]: http://eslint.org/
[eslint-loader]: https://github.com/MoOx/eslint-loader
[stylelint]: https://github.com/stylelint/stylelint
[fontgen-loader]: https://github.com/DragonsInn/fontgen-loader