import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { TransferState } from "../store/states/transfer.state";
import { getPortabilidadeState, getUsers } from "../store/selectors/transfer.selector";
import { IUser } from "src/app/modules/interfaces/user.interface";
import { CreateUserTransfer, SaveUserTransfer, RemoveUserTransfer } from "../store/actions/transfer.action";

@Injectable({
    providedIn: 'root'
})
export class TransferFacade {
    public portabilidadeState$ = this.store.pipe(select(getPortabilidadeState));
    public users$ = this.store.pipe(select(getUsers));

    constructor(
        private store: Store<TransferState>
    ) {}

    createUser() {
        this.store.dispatch(new CreateUserTransfer());
    }
    
    saveUser(user: IUser) {
        this.store.dispatch(new SaveUserTransfer(user));
    }

    removeUser(user: IUser) {
        this.store.dispatch(new RemoveUserTransfer(user));
    }
}