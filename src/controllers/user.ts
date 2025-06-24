import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { User } from '../models/user';
export const register = async (req: Request, res: Response) => {
    const { name, lastname, password, credential, } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);

    User.create({
        name: name,
        lastname: lastname,
        password: password,
        credential: credential,
        status: 1,
    });
    res.json({
        msg:`User ${name} ${lastname} create success ...`
    })
} 