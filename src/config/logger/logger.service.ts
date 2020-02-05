import { Injectable } from '@nestjs/common'
import { Logger } from '@nestjs/common'

@Injectable()
export class LoggerService extends Logger {
  log(message: string) {
    super.log(message)
  }
  error(message: string, trace: string) {
    super.log(message, trace)
  }
  warn(message: string) {
    super.log(message)
  }
  debug(message: string) {
    super.log(message)
  }
  verbose(message: string) {
    super.log(message)
  }
}