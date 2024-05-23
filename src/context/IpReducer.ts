import { IpInfoState, initialIpInfoValue } from "./IpContext";

export type IpInfoAction = { type: 'SET_IP_INFO'; payload: IpInfoState } | { type: 'RESET' };

export const ipInfoReducer = (state: IpInfoState, action: IpInfoAction): IpInfoState => {
    switch (action.type) {
        case 'SET_IP_INFO':
            return { ...action.payload }
        case 'RESET':
            return initialIpInfoValue;
        default:
            return state;
    }
};