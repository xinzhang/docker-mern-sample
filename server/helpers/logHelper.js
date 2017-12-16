import config from '../config';
import moment from 'moment';
import fs from 'fs';


export default class logHelper {
    static info(message) {
        let nowStr = moment().format("DD/MM/YYYY @ HH:mm:ss");
        if (config.environment === 'development') {
            //always log info to console
            let info = (typeof message === 'object') ? JSON.stringify(message) : message
            console.log(`${nowStr}: (Info) ${info}`)
        } else {
            if (config.logging.loglevel === 'info') this.log("info", message);
        }
    }
    static warn(message) {
		if(config.logging.logLevel === "info" || config.logging.logLevel === "warn") this.log("warning",message);
	}
	static error(message) {
		this.log('error',message);
	}
    static log(logType, message) {
        let nowStr = moment().format("DD/MM/YYYY @ HH:mm:ss")
        let logMessage = `${nowStr}: (${logType}) ${(typeof message === 'object') ? JSON.stringify(message) : message}`;

        switch(config.logging.mode) {
			case "logfile" :
				fs.appendFileSync(config.logging.logFilepath || "sample.log", logMessage);
				break;
			// case "email" :
			// 	mailhelper.sendEmail(config.logging.logEmail, 'Error in AssetAPI',logMessage);
			// 	break;
			case "console" :
			default:
				console.log(logMessage);
				break;
		}
    }
}