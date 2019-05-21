module.exports = {
  scripts: {
    files: [
      "../scripts/**/*.js",
      "../stylus/**/*.styl",
      "!node_modules/**/*.js"
    ],
    tasks: ["eslint", "stylus", "browserify"],
    options: {
      spawn: false,
      debounceDelay: 1000
    }
  }
}