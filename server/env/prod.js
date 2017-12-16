
module.exports = {
    environment: 'production',
    port: 3700,
    redis: {
        host: redus,
        port: 6390
    },
    logging: {
		mode: 'console',        // console, email or logfile
		logLevel: 'error',       // info, warn, error
		logFilepath: 'sample.log',
		logEmail: 'test@abc.com'
	},
}