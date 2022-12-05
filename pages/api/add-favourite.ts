import jwt from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest ,NextApiResponse } from 'next';
import { prisma } from '../../lib/prismaClient';
const handler: NextApiHandler = async(req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== "PATCH") {
        return res.status(405).json({message: 'Method not allowed'})
    }
    const cookie = req.cookies['user-cookie']
    const bookId = req.body
    if(!cookie) {
        return res.status(400).json({message: 'Você deve estar logado para favoritar um livro'})
    }
    const verifiedToken = jwt.verify(cookie, process.env.JWT_SECRET)
    const alreadyFavourite = await prisma.user.findFirst({
        where: {
            //@ts-ignore
            matricula: verifiedToken.data.matricula,
            AND: {
                favouriteBooks: {
                    some: {
                        id: bookId
                    }
                }
            }
        }
    })
    if(!alreadyFavourite) {
        await prisma.user.update({
            where: {
                //@ts-ignore
                matricula: verifiedToken.data.matricula
            },
            data: {
                favouriteBooks: {
                    connect: {
                        id: bookId
                    }
                }
            }
        })
        return res.status(200).json({message: 'Livro favoritado com sucesso'})
    } else {
        return res.json({message: 'Esse livro já está favoritado'})
    }
}

export default handler