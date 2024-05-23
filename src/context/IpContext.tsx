import { createContext } from 'react';

export interface IpInfoState {
    ip: string | null;
    isp: string | null;
    location: {
        asn: number | null;
        country: string | null;
        region: string | null;
        timezone: string | null;
    }
}

interface IpInfoContextProps extends IpInfoState {
    setIpInfo: (info: IpInfoState) => void;
    resetIpInfo: () => void;
}

export const initialIpInfoValue: IpInfoState = {
    ip: null,
    isp: null,
    location: {
        asn: null,
        country: null,
        region: null,
        timezone: null
    },
}

export const IpInfoContext = createContext<IpInfoContextProps>({
    ...initialIpInfoValue,
    setIpInfo: () => { },
    resetIpInfo: () => { },
});


