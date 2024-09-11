const path = require("path");
const tailWindCss = require("tailwindcss");
const autoFixer = require("autoprefixer");
const twElements = require("tw-elements/dist/plugin");

module.exports = {
  style: { postcssOptions: { plugins: [tailWindCss, autoFixer, twElements] } },
  webpack: {
    extensions: [".js", ".jsx", ".svg", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@constants": path.resolve(__dirname, "src/utils/constants"),
      "@quickAppImage": path.resolve(__dirname, "src/assets/images/quickApp"),
      "@footerImage": path.resolve(__dirname, "src/assets/images/footer"),
      "@scss": path.resolve(__dirname, "src/assets/scss")
    }
  }
};
