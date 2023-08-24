import { Store } from "@ngrx/store";

export class StoreMock<T> extends Store<T> {

    constructor() {
        super(null, null, null)
    }
}