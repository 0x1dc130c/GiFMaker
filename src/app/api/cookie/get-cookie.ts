import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "js-cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const name = Cookies.get('name');
  
    if (!name) {
      return res.status(404).json({ error: 'Cookie not found' });
    }
  
    return res.status(200).json({ name });
  }