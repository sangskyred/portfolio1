import { headers } from "next/headers";

export async function checkDevice() {
    const headerList = await headers();
    const userAgent = headerList.get('user-agent') || '';

    return { userAgent }
}