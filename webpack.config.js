const _config = require('@expo/webpack-config');

module.exports = async (env, argv) => {
  const config = await _config(env, argv);
  if (config.mode === 'production') {
    config.mode = 'none';
  }
  return config;
};
