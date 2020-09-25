/**
 * The logger class takes care of displaying informative logs about the whole state of the execution of our application
 */
export class LoggerClass {
  private s: boolean; // this is a switch depending on the mode ON/OFF

  /**
   * The logger class responsible for displaying various messages in the browser's console only
   * @param dev {string} Set to FALSE if in production to disable logs
   */
  constructor(dev: boolean = true) {
    this.s = dev;
    this.i('Logger', 'initiated')();
  }

  static init(dev: boolean = true): LoggerClass {
    const log = new LoggerClass(dev);
    if (typeof window !== 'undefined') window.log = log;
    return log;
  }

  /**
   * Turn off all logs
   */
  goSilent() {
    this.s = false;
  }

  /**
   * Turn on all logs
   */
  goLoud() {
    this.s = true;
  }

  /**
   * Generates text format
   * @param color
   * @param backgroundColor
   * @param fontSize
   */
  private format(
    color: string = 'white',
    backgroundColor: string = 'blue',
    fontSize: string = '12px',
  ): string {
    return `background: ${backgroundColor}; color: ${color}; padding: 2px 6px; border-radius: 2px; font-size: ${fontSize}";`;
  }

  /**
   * Error display message
   * console.error
   * @param args text or objects to display to the console
   */
  e(r: string = '', ...args: any[]): Function {
    if (!this.s) return this.production;

    const region = '%c' + r;
    const params: any = [
      console,
      region,
      this.format('white', 'red', '12px'),
      ...args,
    ];
    return Function.prototype.bind.apply(console.error, params);
  }

  /**
   * Info display message
   * console.info
   * @param args text or objects to display to the console
   */
  i(r: string = '', ...args: any[]): Function {
    if (!this.s) return this.production;

    const region = '%c' + r;
    const params: any = [console, region, this.format(), ...args];
    return Function.prototype.bind.apply(console.info, params);
  }

  /**
   * Warning display message
   * console.warn
   * @param text text or objects to display to the console
   */
  w(r: string = '', ...args: any[]): Function {
    if (!this.s) return this.production;

    const region = '%c' + r;
    const params: any = [
      console,
      region,
      this.format('white', 'yellow', '12px'),
      ...args,
    ];
    return Function.prototype.bind.apply(console.warn, params);
  }

  production(): undefined {
    return undefined;
  }
}

declare global {
  interface Window {
    log: LoggerClass;
  }
}

let log: LoggerClass;
if (typeof window !== 'undefined' && typeof window?.log !== 'undefined') {
  log = window.log;
} else {
  log = new LoggerClass();
}

export default log;
