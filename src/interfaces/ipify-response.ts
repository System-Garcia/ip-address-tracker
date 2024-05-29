export interface IpifyResponse {
    ip:       string;
    location: Location;
    as:       As;
    isp:      string;
}

export interface As {
    asn:    number;
    name:   string;
    route:  string;
    domain: string;
    type:   string;
}

export interface Location {
    country:  string;
    region:   string;
    timezone: string;
}
