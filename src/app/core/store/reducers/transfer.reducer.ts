import { TransferAction, TransferActions } from "../actions/transfer.action";
import { TransferState, transferInitialState } from "../states/transfer.state";
import { v4 as uuid } from 'uuid';

export function transferReducer(
    state = transferInitialState,
    action: TransferActions
): TransferState {
    switch (action.type) {
        case TransferAction.RESET:
            return transferInitialState
        case TransferAction.CREATE_USER:
            return {
                ...state,
                portabilidade: {
                    origem: {
                        users: [
                            ...state.portabilidade.origem.users,
                            {
                                name: '',
                                cpf: '',
                                email: '',
                                wantInfo: false,
                                uuid: uuid()
                            }
                        ]
                    }
                }
            }
        case TransferAction.SAVE_USER:
            return {
                ...state,
                portabilidade: {
                    origem: {
                        users: state.portabilidade.origem.users.map(u => {
                            if (u.uuid == action.payload.uuid) {
                                u = action.payload;
                            }
                            return u;
                        })
                    }
                }
            }
        case TransferAction.REMOVE_USER:
            return {
                ...state,
                portabilidade: {
                    origem: {
                        users: state.portabilidade.origem.users.filter(u => {
                            return u.uuid != action.payload.uuid
                        })
                    }
                }
            }
        default:
            return state;
    }
}