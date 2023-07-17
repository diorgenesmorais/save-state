import { IOrigin, IPortability } from "src/app/modules/interfaces/portabilidade.interface";
import { IUser } from "src/app/modules/interfaces/user.interface";

export interface TransferState {
    portabilidade: IPortability
}

export const transferInitialState: TransferState = {
    portabilidade: {
        origem: {
            users: []
        }
    }
}
