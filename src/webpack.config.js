module.exports = {
    output: {
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                    {
                        loader: "babel-loader"
                    }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:[
                    "style-loader",
                    {loader: "css-loader",
                    options: { url: false }
                    }
                ]
            }
        ]
    }
}