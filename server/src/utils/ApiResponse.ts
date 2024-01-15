class ApiResponse {
    public success: boolean;
    public data: Object;
    public message: string;

    constructor(data: Object, message: string = "Success") {
        this.success = true;
        this.data = data;
        this.message = message;
    }
}

export { ApiResponse };
