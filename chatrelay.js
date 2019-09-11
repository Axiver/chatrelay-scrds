//Discord login
const Discord = require('discord.js');
const token   = require("./config/token.json");
const client  = new Discord.Client();
var fs = require('fs');

//Scheduler 
var schedule = require('node-schedule');

const Tail = require('tail').Tail;

//Dir of log
const jbchatlogdir = `plschange`;

var logdate = "";
var currdate = "";

currdate = formatDate(Date.now());
logdate = "chat_" + currdate + ".txt";

//Make log if it doesn't exist
if (!fs.existsSync(jbchatlogdir + logdate)){
    fs.writeFile(jbchatlogdir + logdate, "", function (err) {
    	if (err)
    		console.log(err + "120");
    	tailjb = new Tail(jbchatlogdir + logdate);
	    tailjb.watch();
    });
}

var tailjb = new Tail(jbchatlogdir + logdate);

let guild = "";
let channel = "";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('');
}

client.on('ready', () => {
	tailjb.watch();
  	console.log("Chat relay active for jailbreak server.");
});

var cron = schedule.scheduleJob('0 0 0 * * *', function() {
	//Stop watching
	tailjb.unwatch();
	console.log(" ");
	console.log("Switching to new file to read from");

	//Terminate watcher
	tailjb = null;
	currdate = formatDate(Date.now());
	logdate = "L" + currdate + ".log";

	//Make log if it doesn't exist
	if (!fs.existsSync(jbchatlogdir + logdate)) {
	    fs.writeFile(jbchatlogdir + logdate, "", function (err) {
	    	if (err)
	    		console.log(err + "320");
	    	tailjb = new Tail(jbchatlogdir + logdate);
	    	tailjb.watch();
	    	console.log("JB Chat relay resumed");
	    	return;
	    });
	}
});

tailjb.on("line", function(data) {
	guild = client.guilds.find("id", `plschange`);
	channel = guild.channels.find("id", "plschange");
	channel.send(data);
});
 
tailjb.on("error", function(error) {
	guild = client.guilds.find("id", `plschange`);
	channel = guild.channels.find("id", "plschange");
	channel.send('ERROR: ', error);
});

client.on('error', console.error);
client.login(token.token);