import { cookies } from "next/headers"

export const getUsers = async () => {
    const res = await fetch('http://localhost:8080', {
        headers: {
            Cookie: cookies().toString()
        }
    })
    return res.json()
}