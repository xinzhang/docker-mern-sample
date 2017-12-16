var redis = require("redis");
var config = require('../config');

// https://derickbailey.com/2016/03/09/creating-a-true-singleton-in-node-js-with-es6-symbols/

// create a unique, global symbol name
// -----------------------------------

const SYMBOL_KEY = Symbol.for("Sample.redisHelper");

// check if the global object has this symbol
// add it if it does not have the symbol, yet
// ------------------------------------------

let globalSymbols = Object.getOwnPropertySymbols(global);
let symbolExists = (globalSymbols.indexOf(SYMBOL_KEY) > -1);

if (!symbolExists){
	global[SYMBOL_KEY] = {
		redisHelper: true
	};
}


// define the redisHelper API
// ------------------------

class redisCacheClass {
    constructor() {
        this.opt = {

        }

        this._dbConnection = redis.createClient(this.opt);

        this._dbConnection.on("error", err => {
            if (typeof err === 'string' || err instanceof String) {
                logHelper.error(`Redis Error: \${err}`)
            } else {
                logHelper.error(`Redis Error: ${JSON.stringify(err)}`);
            }
        })

        //need keep connection
        // tbd
    }

    get client() {
		return this._dbConnection;
	}

}

let redisClient = new redisCacheClass();

Object.defineProperty(redisClient, "instance", {
	get: function(){
		return global[SYMBOL_KEY];
	}
});

// ensure the API is never changed
// -------------------------------

Object.freeze(redisClient);

// export the redisHelper API only
// -----------------------------

export default redisClient;
