export class Currency {

    public name: string;
    public flag: string;
    public shortName: string;
    public id: number;
    public rate: string;



    constructor(name: string, flag: string, shortName: string, id: number, rate: string) {

        this.name = name;
        this.flag = flag;
        this.shortName = shortName;
        this.id = id;
        this.rate = rate;
    }
}
