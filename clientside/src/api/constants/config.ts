export const API_URL = "https://netcentric-battleship-api.herokuapp.com/";

export enum SocketEvent {
    CreateRoom = "createRoom",
    CreateRoomResponse = "createRoomResponse",
    ChangeLock = "changeLock",
    ChangeLockResponse = "changeLockResponse",
    GetRoomList = "getRoomList",
    GetRoomListResponse = "getRoomListResponse",
    JoinRoom = "joinRoom",
    JoinRoomResponse = "joinRoomResponse",
    SetAvatar = "setAvatar",
    SetAvatarResponse = "setAvatarResponse",
    RandomShip = "randomShip",
    RandomShipResponse = "randomShipResponse",
    Setup = "setup",
    SetupResponse = "setupResponse",
    Shoot = "shoot",
    ShootResponse = "shootResponse",
    StartResponse = "gameStartResponse",
    EndResponse = "endResponse",
    ShipDestroyed = "shipDestroyed",
    Chat = "chat",
    Stat = "stat",
    StatResponse = "statResponse",
    Withdraw = "withdraw",
    SocketId = "SocketID",
    Disconnect = "disconnect",
    AdminLogin = "adminLogin",
    AdminLoginResponse = "adminLoginResponse",
    AdminGetRoomList = "adminGetRoomList",
    AdminGetRoomListResponse = "adminGetRoomListResponse",
    AdminSpectate = "adminSpectate",
    AdminSpectateResponse = "adminSpectateResponse",
    AdminStopSpectate = "adminStopSpectate",
    AdminStopSpectateResponse = "adminStopSpectateResponse",
}

export enum SetupResponseStatus {
    Completed = "Completed",
    InvalidPlacement = "Invalid Placement",
}

export type InfallibleResponse = "Completed";
