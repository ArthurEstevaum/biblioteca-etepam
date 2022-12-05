import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import bcrypt from "bcrypt"
import cookie from "cookie"
import jwt from 'jsonwebtoken';
import { prisma } from '../../lib/prismaClient'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req
    body.matricula = parseInt(body.matricula)

    if(req.method !== 'POST') {
        res.status(405).json({message: 'Method not allowed'})
    } else {
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        matricula: body.matricula
                    },
                    {
                        email: body.email
                    }
                ]
            }
        })
        if(!userAlreadyExists) {
            const passwordHash = await bcrypt.hash(body.password, 10) 
            await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    matricula: body.matricula,
                    telefone: body.telefone,
                    ensino: body.ensino,
                    course: body.course,
                    password: passwordHash
                }
            })
            const userToken = jwt.sign({
                data: {
                    name: body.name,
                    email: body.email,
                    matricula: body.matricula,
                    telefone: body.telefone,
                    ensino: body.ensino,
                    course: body.course,
                    isAdmin: false
                }
            }, process.env.JWT_SECRET)
            
            return res.status(201).setHeader('Set-Cookie', cookie.serialize('user-cookie', userToken, {
                httpOnly: true,
                maxAge: 60 * 60, //1 hour
                path: "/",
                sameSite: 'strict'
            })).json({message: 'Usuário criado com sucesso!'})
        } else {
            return res.status(400).json({message: 'O usuário já existe'})
        }
    }
}

export default handler