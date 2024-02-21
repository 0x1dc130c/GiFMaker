module.exports = function (app: any) {
    app.use(function (request: any, response: any, next: any) {
        response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        response.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        next();
    });
};
