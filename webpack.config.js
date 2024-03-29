const path = require("path");

module.exports = {
    entry: {
        main: "./src/js/index.js"
    },
    
    output: {
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

    resolve: {
        alias: {
            "%blocks%": path.resolve(__dirname, "src/blocks")
        }
    }
};
