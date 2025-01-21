module.exports = {
  settings: {
    "import/resolver": {
      node: {
        paths: ["."]
      },
      alias: {
        map: [["@", "./"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
