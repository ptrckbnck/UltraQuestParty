export interface Hero {
    id? : number;
    race: String;
    name: String;
    profession: String;
    closeCombat: number;
    rangeCombat: number;
    armor: number;
    skill1 : String;  
    skill2 : String;
    skill3 : String;
    skill4 : String;
    movement : number;
    strength : number;
    dexterity : number;
    intelligence : number;
    equipment : String[];
    armorItem : String;
    horse: String;
}