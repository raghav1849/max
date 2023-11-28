class ApiError {
    constructor(
        errors = null,
        message = "Something went wrong",
        stack = ""
    ) {
        this.data = null;
        this.errors = errors;
        this.success = false;
        this.message = message;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
