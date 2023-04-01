import { signOut } from "firebase/auth";
import "firebase/auth";
import { auth } from "@/common/utils/firebase";
import {useDispatch} from "react-redux"

import type { NextApiRequest, NextApiResponse } from "next";

export default async function SignOut(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const dispatch = useDispatch();
    await signOut(auth)
        .then(() => {
            res.status(200).json({ message: "Log Out Successfuly" });
        })
        .catch((error) => {
            console.error("Log Out failed", error.message);
            res.status(400).json(error.message);
        });
}
