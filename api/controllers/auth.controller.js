import user from '../models/user.js'
import bcryptjs from 'bcryptjs'
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const handlepassword= bcryptjs.hashSync(password,10)
    const newUser = new user({ username, email, password: handlepassword })
    try {
        await newUser.save()
        res.status(201).json('User Created Successfully')

    } catch (e) { 
        res.status(500).json(e.message)
    }
}