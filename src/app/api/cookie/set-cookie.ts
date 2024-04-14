import { NextApiRequest, NextApiResponse  } from "next";
import Cookies from "js-cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    Cookies.set("name", name);
    return res.status(200).json({ message: "Cookie set successfully" });
}