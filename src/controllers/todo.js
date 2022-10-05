const db = require('../config/db');
const ubahNama = require('../helper/ubahNama');

class TodoController {
  static async getTodos(req, res) {
    try {
      let results = await db.query(`SELECT * FROM todos ORDER BY id ASC;`);

      const resultName = ubahNama(results.rows);

      return res.render('home', {
        todos: resultName,
        title: 'test',
      });
    } catch (error) {
      return res.send(error);
    }
  }

  static async createTodo(req, res) {
    try {
      const newTitle = req.body.title;

      let results = await db.query(
        `INSERT INTO todos (title, checked) VALUES($1, $2);`,
        [newTitle, false]
      );

      return res.send('Berhasil membuat todo');
    } catch (error) {
      return res.send(error);
    }
  }

  static async updateTodo(req, res) {
    try {
      const newChecked = req.body.checked;
      const todoId = req.params.todoId;

      const findTodoById = await db.query(`SELECT * FROM todos WHERE id=$1;`, [
        parseInt(todoId),
      ]);

      await db.query(`UPDATE todos SET checked=$1 WHERE id=$2;`, [
        !findTodoById.rows[0].checked,
        parseInt(todoId),
      ]);

      return res.send('Berhasil Update');
    } catch (error) {
      return res.send(error);
    }
  }

  static async deleteTodo(req, res) {
    try {
      const todoId = req.params.todoId;

      await db.query(`DELETE FROM todos WHERE id=$1;`, [parseInt(todoId)]);

      return res.send('Berhasil Delete dengan Id = ' + todoId);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  }
}

module.exports = TodoController;
