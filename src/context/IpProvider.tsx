import { ReactNode, useReducer } from "react"
import { IpInfoContext, IpInfoState, initialIpInfoValue } from "./IpContext"
import { ipInfoReducer } from "./IpReducer";

interface Props {
    children: ReactNode;
}

export const IpProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(ipInfoReducer, initialIpInfoValue);


    const setIpInfo = (info: IpInfoState) => {
        dispatch({ type: 'SET_IP_INFO', payload: info });
    };

    const resetIpInfo = () => {
        dispatch({ type: 'RESET' });
    };


    return (
        <IpInfoContext.Provider value={{ ...state, resetIpInfo, setIpInfo }}>
            {children}
        </IpInfoContext.Provider>
    )
};
