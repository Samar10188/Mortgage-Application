import { IMetal } from "./IMetal";
import { IOldMetal } from "./IOldMetal";

export interface IBuyer {
        
    _id: string;
    date: string;
    custName: string;
    relation: string;
    relative: string;
    district: string;
    village: string;
    phone: number;
    ornaments: IMetal[];
    soldMetal: IOldMetal[];
}  