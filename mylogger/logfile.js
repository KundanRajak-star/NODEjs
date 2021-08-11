
const logger = require('./logger.js');
const log = new logger()
log.error('there is an error');
log.warn('there is  a warning')
log.info('information for you');
log.trace('there is an trace');
log.debug('this is debug');

