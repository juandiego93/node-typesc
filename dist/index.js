"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("./router/router"));
var server_1 = __importDefault(require("./server/server"));
var server = server_1.default.init(3000);
server.app.use(router_1.default);
server.start(function () {
    console.log('Server Running port: ', 3000);
});
