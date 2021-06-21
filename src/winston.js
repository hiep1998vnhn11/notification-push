import logger from 'winston'
import * as TelegramLogger from 'winston-telegram'

export function telegramLog({ atId = '', message = '', metaData = '' }) {
  console.log(new TelegramLogger())
  // const options = {
  //   token: '1756413705:AAFEvIR4ladoaZpCt7QtfKw83rp1Ir4W2YU',
  //   level: 'info',
  //   chatId,
  //   message,
  //   metaData,
  // }
  // logger.add(new TelegramLogger(options))
}
