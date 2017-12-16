
module.exports = {
    environment: 'uat',
    port: 3600,
    redis: {
        host: redis,
        port: 6380
    },
    logging: {
		mode: 'console',        // console, email or logfile
		logLevel: 'warn',       // info, warn, error
		logFilepath: 'sample.log',
		logEmail: 'test@abc.com'
	}
}