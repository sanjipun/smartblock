/// <reference types="react" />
import { Extension } from '../types';
export default class MoveDown implements Extension {
    readonly name: string;
    readonly group: string;
    readonly showMenu: boolean;
    readonly icon: JSX.Element;
    enable(state: any): boolean;
    onClick(_state: any, _dispatch: any, view: any): void;
}
