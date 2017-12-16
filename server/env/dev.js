let configDev = {
    environment: 'development',
    port: 3500,
    redis: {
        host: 'redis-dev',
        port: 6380
    },
    logging: {
		mode: 'console',        // console, email or logfile
		logLevel: 'info',       // info, warn, error
		logFilepath: 'sample.log',
		logEmail: 'test@abc.com'
	},
}

module.exports = configDev