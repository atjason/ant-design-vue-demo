# What's include

## Reduce icon's size

Refer to [Svg icons make bunlde size too large](https://github.com/ant-design/ant-design/issues/12011)

Related code in `vue.config.js`

```js
// alias for icons.
const alias = (config.resolve.alias || {})
alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, "./src/plugins/icons.js")
config.resolve.alias = alias
```

## Include webpack-bundle-analyzer

Just run `npm run analyze-build`