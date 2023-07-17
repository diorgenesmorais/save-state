import { ActionReducerMap } from "@ngrx/store";
import { TransferState } from "./states/transfer.state";
import { transferReducer } from "./reducers/transfer.reducer";

export interface AppStateUnion {
    app: TransferState
}

export const AppReducers: ActionReducerMap<AppStateUnion> = {
    app: transferReducer
}