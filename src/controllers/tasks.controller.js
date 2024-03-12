import { pool } from '../database.js'

export const getTask = async (req,res) => {
    try {
    const [rows] = await pool.query('SELECT * FROM tasks')
    res.json([rows])
    } catch (err) {
       res.status(404).json({message: 'Task not found'})
    }
};

export const getTaskById =  async (req,res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
        if(rows.length <= 0 ) return res.status(404).json({message: 'Task not found'})
        res.json(rows[0])
    } catch (err) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
}

export const createTask = async (req,res) => {
    try {
        const {name, description} = req.body
        const [rows] = await pool.query('INSERT INTO tasks (name, description) VALUES (?, ?)', [name, description])
        res.send({
            id: rows.insertId,
            name, 
            description,
        })
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
};

export const deleteTask = async (req,res) => {
    try {
        const [rows] = await pool.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
        if(rows.affectedRows <= 0) return res.status(404).json({message: 'Task not found'}) 
        res.sendStatus(204)
        console.log(rows)
    } catch (error) {
        return res.status(500).json({message: 'Something goes wrong'})
    }
};

export const updatetask = async (req,res) => {
    try {
        const {id} = req.params;
        const {name, description} = req.body;
        const [result] = await pool.query('UPDATE tasks SET name = ?, description = ? WHERE id = ?', [name, description, id])
        if(result.affectedRows === 0) return res.status(404).json({message: 'Task not found'})

        const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
        res.json(rows) 
    } catch (error) {
       res.status(500).json({message: 'Something goes wrong'}) 
    }
};

