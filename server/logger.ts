export class Logger {
    static log(msg: String) {
        console.log(msg);
    }

    static warn(msg: String) {
        console.warn(msg);
    }

    static error(error: Error) {
        console.error(error.message, error.name, error.stack);
    }
}
