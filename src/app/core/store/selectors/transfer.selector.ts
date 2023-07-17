import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TransferState } from "../states/transfer.state";

export const transferSelector = createFeatureSelector<TransferState>('app');

export const getPortabilidadeState = createSelector(
    transferSelector,
    (state: TransferState) => state.portabilidade
);

export const getUsers = createSelector(
    transferSelector,
    (state: TransferState) => state.portabilidade.origem.users
);
