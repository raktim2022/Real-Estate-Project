import user from '../models/user.js'
import bcryptjs from 'bcryptjs'
import { errorhandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'
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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validuser = await user.findOne({ email });
        if (!validuser) return next(errorhandler(404, 'User not found'));
        const validpassword = bcryptjs.compareSync(password, validuser.password);
        if (!validpassword) return next(errorhandler(401, 'Wrong Credentials!'));
        const token = jwt.sign({ _id: validuser._id }, process.env.JWT_SECRET);
        const { password: pass, ...userInfo } = validuser_doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(error);
    }
}