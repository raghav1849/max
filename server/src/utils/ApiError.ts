class ApiError {
    public data: null;
    public errors: string | null;
    public success: boolean;
    public message: string

    constructor(
        errors : string | null,
        message : string = "Something went wrong",
    ) {
        this.data = null;
        this.errors = errors;
        this.success = false;
        this.message = message;
    }
}

export { ApiError };
