declare module Express {
  export interface Request {
    body: any;
  }
  export interface Response {
    status: any;
    send: any;
  }
}
