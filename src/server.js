import app from "./app";

const server = app.listen(app.get("port"), '10.43.62.112', () => {
    console.log(("  App is running at http://localhost:%d"), app.get("port"));
    console.log("  Press CTRL-C to stop\n");
    console.log
});

export default server;