import { Injectable, LoggerService } from '@nestjs/common';
import * as bunyan from 'bunyan';

@Injectable()
export class WinstonLoggerService implements LoggerService {
    private readonly logger: bunyan;

    constructor() {
        this.logger = bunyan.createLogger({
            name: 'ss',
            stream: process.stdout,
        })
    }

/*     setContext(serviceName: string) {
        this.logger.defaultMeta = {
            ...this.logger.defaultMeta,
            service: serviceName,
        };
    }

    appendDefaultMeta(key: string, value: string) {
        this.logger.defaultMeta = {
            ...this.logger.defaultMeta,
            [key]: value,
        };
    }
 */
    log(message: string) {
        this.logger.info(message);
    }
    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }
    warn(message: string) {
        this.logger.warn(message);
    }
    debug(message: string) {
        this.logger.debug(message);
    }
}
