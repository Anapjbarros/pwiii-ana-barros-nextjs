
import { createConnetion } from 'mysql2/promise';


async function connectTDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

export default async function handler(req, res) {
    if( req.mehod !== 'GET') {
        return res.status(405).jason({ error: 'Metodo não permitido ' });
    }

    try {

        const connetion = await connectTDatabase();


        const [rows] = await connection.execute ('SELECT * FROM users WHERE id = 1');


        if( rows.length ===0){
            return res.status(404).json({ error: 'Usuario não encontrado.' });
        }


        await connetion.end();
    

    res.status(200).jsaon(rows);
    }  cath (error) {
        console.error('Erro de conexão com o bando: ', error);
        res.status(500).json({ error: 'Erro Interno de Servidor'});
    }
}