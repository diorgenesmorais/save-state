import { Action } from "@ngrx/store";
import { IUser } from "src/app/modules/interfaces/user.interface";

export enum TransferAction {
    RESET = '[Transfer] reset users',
    CREATE_USER = '[Transfer] create user',
    SAVE_USER = '[Transfer] save user',
    REMOVE_USER = '[Transfer] remove user'
}

export class ResetUsersTransfer implements Action {
    readonly type = TransferAction.RESET;
}

export class CreateUserTransfer implements Action {
    readonly type = TransferAction.CREATE_USER;
    public constructor() {}
}

export class SaveUserTransfer implements Action {
    readonly type = TransferAction.SAVE_USER;
    public constructor(public payload: IUser) {}
}

export class RemoveUserTransfer implements Action {
    readonly type = TransferAction.REMOVE_USER;
    public constructor(public payload: IUser) {}
}

export type TransferActions = 
    | ResetUsersTransfer
    | CreateUserTransfer
    | SaveUserTransfer
    | RemoveUserTransfer;