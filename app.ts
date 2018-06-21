import { IStudentInfo } from './IStudentInfo';
import Stud from './Students';

console.log("Hello");

enum LanguagesKnown {English, Spanish, Italian};
/*
interface studentInfo{
    Name: string,
    Age: number,
    Phone: number,
    Language: string
}
*/
let student:IStudentInfo ={
    Name: "Jorge",
    Age: 30,
    Phone: 351236598,
    Language: LanguagesKnown[LanguagesKnown.Italian]
};

// Lista de Estudiantes
let studentList:IStudentInfo[] = [
    {Name:"Juan", Age:26, Phone:351351351, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name:"Pedro", Age:40, Phone:12345679, Language: LanguagesKnown[LanguagesKnown.Spanish]}
];

let studentListG:Array<IStudentInfo> = [
    {Name:"Juan", Age:26, Phone:351351351, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name:"Pedro", Age:40, Phone:12345679, Language: LanguagesKnown[LanguagesKnown.Spanish]}
];

studentList.push(student);
/*
for (let index = 0; index < studentList.length; index++) {
    const element = studentList[index];
    console.log("Age: "+element.Age+" witch name: "+element.Name+" has Phone: "+element.Phone+" knows languages: "+element.Language);
}
*/
function getStudents(students: IStudentInfo[]){
    students.forEach(element =>{
        console.log("Age: "+element.Age+" witch name: "+element.Name+" has Phone: "+element.Phone+" knows languages: "+element.Language);    
    })
}

getStudents(studentList);

// Rest Parameters

function getNumbers(...nums: number[]){
    nums.forEach(elements =>{
        console.log("Number: " + elements);
    });
}

//Default Parameters
function getInfo(info:string="Happy"){
    console.log(info);
}

getInfo();
getInfo("Very Happy");

//************************************** FUNCTION ADVANCED ************************************/

let StundentName = function(lName:string, fName:string){
    return fName + "..."+lName;
}

console.log(StundentName("Juan","Perez"));

// Arrow Function
let StudentFullName = (lName:string, fName:string) => { return fName + "..."+lName};

console.log(StudentFullName("Pedro","Sanchez"));

/*
class Students{

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
*/
let s = new Stud("Carlos", "Perez");
console.log(s.GetFullName());


//******************** Generics **************/

function getStudentsGenerics(students:Array<IStudentInfo>){
    students.forEach(element =>{
        console.log("Age: "+element.Age+" witch name: "+element.Name+" has Phone: "+element.Phone+" knows languages: "+element.Language);    
    })
}

getStudentsGenerics(studentListG);