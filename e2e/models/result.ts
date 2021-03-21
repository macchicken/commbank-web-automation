export class Result {

    private _message: string;
    private _exist: boolean;

    constructor(exist: boolean, message: string) {
        this._exist = exist;
        this._message = message;
    }

    public get exist(): boolean {
        return this._exist;
    }
    public set exist(value: boolean) {
        this._exist = value;
    }

    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }

}
