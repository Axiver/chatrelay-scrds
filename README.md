# Chat Relay from SCRDS to Discord

###### This is code from a discord bot that I made for the Lego's Servers Discord Server. They ran a Jailbreak server for CSGO. I'm releasing this as it is unlikely that they will open up ever again.

You may modify this spaghetti code for your own usage. It was designed to work in conjunction with the chatlogger plugin for SCRDS, which I will include in this repository.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development, testing or production purposes. See Installing for notes on how to deploy the project on a live system.

### Prerequisites

You need Nodejs and npm (which comes with nodejs) to use this bot.

[Download Nodejs and npm](https://nodejs.org/en/)

It also requires your SCRDS server to have Sourcemod installed. See [Sourcemod Documentation](https://wiki.alliedmods.net/Installing_SourceMod) on how to install it.

### Installing
#### Node packages

After downloading Nodejs and npm, `cd` into the directory you installed the bot to and run `npm i`. It should automatically install all the needed modules for this bot to work.

#### Setup

##### Manual

First, place `chat_logger.smx` into the `/plugins` directory of your Sourcemod installation.

Afterwards, modify certain files for the bot to work (See [Modification of files](#modification-of-files)). Finally, run `node chatrelay.js` and reboot your SCRDS server, and everything should work.

Ensure that both the bot and the SCRDS server is on the same system.

##### Modification of files

You are required to add a Discord bot token in `./config/token.json`, replacing `<yourtoken>`.
You will also need to change every `plschange` in `./chatrelay.js` with a fitting variable for the bot to function.

The source code for `chat_logger.smx` is also provided in case you want to modify it to your needs or whatever.

## Contributing

Please read [CONTRIBUTING.md](Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Garlicvideos** - [Garlicvideos](https://github.com/Garlicvideos)

See also the list of [contributors](https://github.com/Garlicvideos/chatrelay-scrds/contributors) who participated in this project.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details
