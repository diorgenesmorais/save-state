import { IUser } from "./user.interface";

export interface IPortability {
    origem: IOrigin;
}

export interface IOrigin {
    users: Array<IUser>;
}