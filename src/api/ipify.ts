import { IpifyResponse } from "../interfaces";

const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

if (!apiKey) {
    throw new Error("VITE_IPIFY_API_KEY is not defined");
}

export const fetchIpData = async (ipAddress: string | null) => {

    try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipAddress}`);
        if (!response.ok) return { ok: false };

        const { ip, isp, location: { country, region, timezone }, as: { asn } } = await response.json() as IpifyResponse;

        return {
            ok: true,
            ipData: {
                ip,
                isp,
                location: {
                    asn,
                    country, region,
                    timezone
                }
            },
        };
    } catch (error) {
        console.error("Error fetching IP data:", error);
        return { ok: false };
    }
}