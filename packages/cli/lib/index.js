#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var clear_1 = __importDefault(require("clear"));
var figlet_1 = __importDefault(require("figlet"));
var helpers_1 = require("yargs/helpers");
(0, clear_1.default)();
console.log(figlet_1.default.textSync('pizza-cli', { horizontalLayout: 'full' }));
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    // Use the commands directory to scaffold.
    .commandDir('commands')
    // Enable strict mode.
    .strict()
    // Useful aliases.
    .alias({ h: 'help' }).argv;
