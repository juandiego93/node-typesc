import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';
const router = Router()
router.get('/heroes', (req: Request, resp: Response) => {
    const query = `SELECT * FROM heroes;`
    MySQL.ejecutarQuery(query, (err: any, results: Object[]) => {
        if (err) {
            resp.status(400).json({
                ok: false,
                err: err
            })
        } else {
            resp.status(200).json({
                ok: true,
                heroes: results
            })
        }
    })
})
router.get('/heroes/:id', (req: Request, resp: Response) => {
    const id = req.params.id
    const escapeId = MySQL.instance.cnn.escape(id)
    const query = `
        SELECT 
            * 
        FROM 
            heroes
        WHERE id = ${escapeId};
    `;

    MySQL.ejecutarQuery(query, (err: any, results: Object[]) => {
        if (err) {
            resp.status(400).json({
                ok: false,
                err: err
            })
        } else {
            resp.status(200).json({
                ok: true,
                heroe: results[0]
            })
        }
    })
})
export default router