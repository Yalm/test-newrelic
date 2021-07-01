import { LoggerService } from "@nestjs/common";
import { yellow } from "@nestjs/common/utils/cli-colors.util";
import { createLogger, transports, format, Logger } from "winston";
import { createFormatter } from "./utils/create-formatter.util";
import * as newrelic from "newrelic";

export class WinstonLogger implements LoggerService {
  private readonly logger: Logger;

  constructor(protected context?: string) {
    const color = format.colorize().colorize;
    this.logger = createLogger({
      level: "debug",
      defaultMeta: context ? { service: context } : undefined,
      transports: [
        new transports.Console({
          format: format.combine(
            format.timestamp({
              format: "DD/MM/YYYY, hh:mm A",
            }),
            format.colorize({ all: true }),
            format.printf((info) => {
              const pidMessage = color(
                info[Symbol.for("level") as any],
                `[Nest] ${process.pid}   -`
              );
              return `${pidMessage} ${info.timestamp}  ${yellow(
                `[${info.service}]`
              )} ${info.message}`;
            })
          ),
        }),
        new transports.File({
          filename: "app.log",
          format: createFormatter(newrelic)(),
        }),
      ],
    });
  }

  setContext(serviceName: string) {
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

  log(message: any, context?: string) {
    this.logger.info(
      message,
      context
        ? {
            service: context,
          }
        : undefined
    );
  }

  error(message: any, trace = "", context?: string) {
    const meta: Record<string, any> = {};

    if (typeof message === "object") {
      trace = message.stack;
      meta.error = message;
      message = message.message;
    }

    if (context) {
      meta.service = context;
    }

    this.logger.error(message, meta);

    if (trace) {
      process.stderr.write(`${trace}\n`);
    }
  }

  warn(message: any, context?: string) {
    this.logger.warn(
      message,
      context
        ? {
            service: context,
          }
        : undefined
    );
  }

  debug(message: any, context?: string) {
    this.logger.debug(
      message,
      context
        ? {
            service: context,
          }
        : undefined
    );
  }

  verbose(message: any, context?: string) {
    this.logger.verbose(
      message,
      context
        ? {
            service: context,
          }
        : undefined
    );
  }
}
