export class Startup {
    id?                     : string;
    name                    : string;
    ProfessionalSupportKind : string;
    professionalTime        : Number;
    tags                    : any;

    constructor(body:any){
        this.name                     = body.name;
        this.ProfessionalSupportKind  = body.ProfessionalSupportKind;
        this.professionalTime         = body.description;
        this.tags                     = body.tags;
    }
}