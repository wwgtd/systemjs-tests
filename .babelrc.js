module.exports = {
  presets: [
      ["react-app"],
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      targets: { esmodules: true },
      corejs: 3,
    }]
]
};