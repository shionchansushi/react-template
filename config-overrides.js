const path = require('path');

module.exports = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      // エイリアスにするパスをココに書く
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@libs': path.resolve(__dirname, './src/libs/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
    },
  };

  return config;
};
