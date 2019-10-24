const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        react: path.resolve('../node_modules/react'),
        lib: path.resolve('../src/lib')
      },
    },
  })
}
