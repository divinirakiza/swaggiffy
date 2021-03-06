export class SwaggiffyError extends Error {
    constructor(message = 'An unexpected error occurred', code = 'SWAGGIFY_ERROR') {
        super(message);
        this.name = code;
        Error.captureStackTrace(this, SwaggiffyError);
    }
}
