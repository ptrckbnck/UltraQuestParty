import { Ability } from "./Ability";

export interface Race {
    race: String;
    raceInfo : String;
    id?: number;
    mov: Ability;
    str: Ability;
    dex: Ability;
    int: Ability;
    equip: String[];
    horse: number[];
    native: String[];
}