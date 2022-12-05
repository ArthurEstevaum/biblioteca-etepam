import cookie from 'cookie';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader(
        'Set-Cookie',
        cookie.serialize('user-cookie', '', {
            httpOnly: true,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/'
        })
    )
    res.statusCode = 200
    res.json({success: true})
}

export default handler