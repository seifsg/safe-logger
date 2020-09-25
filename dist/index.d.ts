/**
 * The logger class takes care of displaying informative logs about the whole state of the execution of our application
 */
export declare class LoggerClass {
    private s;
    /**
     * The logger class responsible for displaying various messages in the browser's console only
     * @param dev {string} Set to FALSE if in production to disable logs
     */
    constructor(dev?: boolean);
    static init(dev?: boolean): LoggerClass;
    /**
     * Turn off all logs
     */
    goSilent(): void;
    /**
     * Turn on all logs
     */
    goLoud(): void;
    /**
     * Generates text format
     * @param color
     * @param backgroundColor
     * @param fontSize
     */
    private format;
    /**
     * Error display message
     * console.error
     * @param args text or objects to display to the console
     */
    e(r?: string, ...args: any[]): Function;
    /**
     * Info display message
     * console.info
     * @param args text or objects to display to the console
     */
    i(r?: string, ...args: any[]): Function;
    /**
     * Warning display message
     * console.warn
     * @param text text or objects to display to the console
     */
    w(r?: string, ...args: any[]): Function;
    production(): undefined;
}
declare global {
    interface Window {
        log: LoggerClass;
    }
}
declare let log: LoggerClass;
export default log;
