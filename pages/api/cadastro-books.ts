import { prisma } from '../../lib/prismaClient';
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async(req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req

    //extrair as categorias pertencentes ao livro no objeto da requisição
    // e as agrupar na array categories 
    const bodyKeyValues = Object.entries(body)
    const filteredKeyValues = bodyKeyValues.filter(keyValue => keyValue[1] === true)
    const categories = filteredKeyValues.map(filteredKeyValue => filteredKeyValue[0])

    const book = {
        title: body.title,
        author: body.author,
        stars: body.author,
        synopsis: body.synopsis,
        quantity: body.quantity,
        linkImagem: body.linkImagem,
        categories: categories
    }
    book.quantity = parseInt(body.quantity)
    book.stars = parseInt(body.stars)
    console.log(req.method);
    if(req.method == 'POST') {
        res.status(405).json({message: 'Method not allowed'})
    }
    else {
        await prisma.book.create({
            data: {
                title: book.title,
                author: book.author,
                synopsis: book.synopsis,
                categories: {
                   connect: book.categories.map(category => ({category: `${category}`}))
                },
                linkImagem: book.linkImagem,
                quantidade: book.quantity,
                stars: book.stars
            }
        })
        res.status(201).json({message: 'Livro cadastrado com sucesso'})
    }
}

export default handler  
