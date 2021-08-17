export const port: number = 9999;
interface IActions {
    [action: string]: string
}

export const actions: IActions = {
    ROOM_JOIN: 'ROOM_JOIN',
    ROOM_NEW_MESSAGE: 'ROOM_NEW_MESSAGE',
    ROOM_SET_USERS: 'ROOM_SET_USERS',
    SERVER_ROOM_ERROR: 'SERVER_ROOM_ERROR',
    disconnect: 'disconnect',
    connect_error: 'connect_error',
    SERVER_CONNECTION_ERROR: 'SERVER_CONNECTION_ERROR',
};

