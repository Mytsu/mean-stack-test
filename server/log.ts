export interface LogInterface {
    debug(msg: string, ...supportingDetails: any[]): void;
    warn(msg: string, ...supportingDetails: any[]): void;
    error(msg: string, ...supportingDetails: any[]): void;
    info(msg: string, ...supportingDetails: any[]): void;
}

export class Log implements LogInterface {

    active: boolean;

    constructor() {
        this.active = true;
    }

    debug(msg: string, ...supportingDetails: any[]): void {
        this.emitLog('debug', msg, supportingDetails);
    }

    warn(msg: string, ...supportingDetails: any[]): void {
        this.emitLog('warn', msg, supportingDetails);
    }

    error(msg: string, ...supportingDetails: any[]): void {
        this.emitLog('error', msg, supportingDetails);
    }

    info(msg: string, ...supportingDetails: any[]): void {
        this.emitLog('info', msg, supportingDetails);
    }

    private emitLog(msgType: 'debug' | 'info' | 'warn' | 'error', msg: string, supportingDetails: any[]) {
        if (this.active) {
            if (supportingDetails.length > 0) {
                console[msgType](msg, supportingDetails);
            } else {
                console[msgType](msg);
            }
        }
    }
}
