import user from '../models/user.js'
import bcryptjs from 'bcryptjs'
import { errorhandler } from '../utils/error.js';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const handlepassword = bcryptjs.hashSync(password, 10)
    const newUser = new user({ username, email, password: handlepassword })
    try {
        await newUser.save()
        res.status(201).json('User Created Successfully')

    } catch (e) {
        next(e);
    }
};