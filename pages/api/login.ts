import cookie from 'cookie';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prismaClient';

const handler: NextApiHandler = async(req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body
    if(req.method !== 'POST') {
        res.status(405).json({message: 'Method not allowed'})
    } else {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                password: true,
                name: true,
                course: true,
                isAdmin: true,
                matricula: true,
                telefone: true,
                ensino: true
            }
        })
        if(!user) {
            res.status(400).json({message: 'Este usuário não existe'})
        }

        const match = await bcrypt.compare(password, user.password)
        if(match) {
            const userToken = jwt.sign({
                data: {
                    name: user.name,
                    email,
                    matricula: user.matricula,
                    telefone: user.telefone,
                    ensino: user.ensino,
                    course: user.course,
                    isAdmin: user.isAdmin

                }
            }, process.env.JWT_SECRET)

            return res.status(200).setHeader('Set-Cookie', cookie.serialize('user-cookie', userToken, {
                httpOnly: true,
                maxAge: 60 * 60, //1 hour
                path: '/',
                sameSite: 'strict'
            })).json({message: 'Login realizado com sucesso'})
        } else {
            return res.status(400).json({message: 'Usuário ou senha incorretos'})
        }
    }
}

export default handler