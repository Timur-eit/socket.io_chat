"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.port = void 0;
exports.port = 9999;
exports.actions = {
    ROOM_JOIN: 'ROOM_JOIN',
    ROOM_NEW_MESSAGE: 'ROOM_NEW_MESSAGE',
    ROOM_SET_USERS: 'ROOM_SET_USERS',
    SERVER_ROOM_ERROR: 'SERVER_ROOM_ERROR',
    disconnect: 'disconnect',
    connect_error: 'connect_error',
    SERVER_CONNECTION_ERROR: 'SERVER_CONNECTION_ERROR',
};
//# sourceMappingURL=constants.js.map