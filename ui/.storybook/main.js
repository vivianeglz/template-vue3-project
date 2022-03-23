const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@ui": path.resolve(__dirname, "../"),
      "@client": path.resolve(__dirname, "../../client"),
      "@components": path.resolve(__dirname, "../components"),
      "@common": path.resolve(__dirname, "../../common")
    };

    return config;
  }
};
