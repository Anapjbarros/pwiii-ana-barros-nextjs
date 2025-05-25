
import { createConnetion } from 'mysql2/promise';


async function connectToatabase() {
    return createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

export default async function handler (req, res) {
    if (req.method !== 'POST') {
        return res.status(405),json ({ error: 'Metodo não permitido'});
    }

    const userdata = req.body;
    console.log(userdata)

    const { name, email} = userdata;

    if (!name || !email) {
        return res.status(400).json({ error: 'name e email são obrigadtórios no request body'});
    }
    try {
        const connetion = await connectToDatabase();



        const [result] = await connection.executive( 'INSERT INTO users (name, email) VALUES ( ?, ?)', [
            name,
            email,
        ]);



        await connection.end();


        res.status(201).json({ id: result.insertId, message: 'Usuario criado com sucesso'});
    } catch (error) {
        console.error( ' Error de conexão com o banco: ', error);
        res.status(500).json({ error: 'Erro iterno de Servidor'});
    } 
}