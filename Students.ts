export default class Students{

    private _lName:string;
    private _fName:string;

    constructor(private lName,private fName){
        this._lName = lName;
        this._fName = fName;
    }

    GetFullName():string{
        return this._lName+" "+this._fName;
    }
}

//export {Students}