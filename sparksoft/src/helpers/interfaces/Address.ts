export interface iAddress{
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:iGeoLocation;
}

export interface iGeoLocation{
    lat:string;
    lng:string;
}