я делал следушим образом

1.npx create-react-app my-app
2.cd my-app
3.npm i --save-dev prettier
4.создал файл конфиг prettierrc.json
{
    "trailingComma":"none",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
}
5.npm i --save-dev eslint-plugin-react
6.cоздал файл конфиг .eslintrc
{
    "plugins": ["react"],
    "rules": {   
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error" 
    }
}
7.npm i --save-dev eslint-config-airbnb
8.npm i --save-dev husky lint-staged
9.добавил в package.json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint . --fix",
      "git add"
    ],
    "*.(js|html|css)": [
      "prettier --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }  
}
10.начал проверять и вот такая ситуация , потом 