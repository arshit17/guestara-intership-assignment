const dotenv = require("dotenv");
const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

dotenv.config();

app.use(cors());
app.use(express.json());

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SabBtaDu@12345",
    database: "guestara"
})

con.connect((err) => {
    if (err) {
        console.error("Error connecting to DB:", err);
        return;
    }
    console.log("Connected to MySQL DB");
});

app.post('/category', (req, res) => {
    const {
        category_name,
        category_image,
        category_descriptions,
        category_tax_app,
        category_tax,
        category_tax_type
    } = req.body;
    const sql = "INSERT INTO category (category_name, category_image, category_descriptions, category_tax_app, category_tax, category_tax_type) VALUES (?,?,?,?,?,?)";
    con.query(sql, [category_name, category_image, category_descriptions, category_tax_app, category_tax, category_tax_type], function (err, result) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Server error");
            return;
        }
        res.json(result);
    })
})

app.post('/subCategory', (req, res) => {
    const {
        sub_category_name,
        sub_category_image,
        sub_category_descriptions,
        category_id,
        sub_category_tax_app,
        sub_category_tax
    } = req.body;
    const sql = "INSERT INTO sub_category (sub_category_name, sub_category_image, sub_category_descriptions, category_id, sub_category_tax_app, sub_category_tax) VALUES (?,?,?,?,?,?)";
    con.query(sql, [sub_category_name, sub_category_image, sub_category_descriptions, category_id, sub_category_tax_app, sub_category_tax], function (err, result) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Server error");
            return;
        }
        res.json(result);
    })
})

app.post('/item', (req, res) => {
    const {
        item_name,
        item_image,
        item_descriptions,
        sub_category_id,
        item_base_amount,
        item_discount,
        item_tax_app,
        item_tax
    } = req.body;
    const item_total_amount = (item_base_amount || 0) - (item_discount || 0);
    const sql = "INSERT INTO item (item_name,item_image,item_descriptions,sub_category_id,item_base_amount,item_discount,item_tax_app,item_tax,item_total_amount) VALUES (?,?,?,?,?,?,?,?,?)";
    con.query(sql, [item_name, item_image, item_descriptions, sub_category_id, item_base_amount, item_discount, item_tax_app, item_tax, item_total_amount], function (err, result) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Server error");
            return;
        }
        res.json(result);
    })
})

app.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Server error");
            return;
        }
        res.json(result);
    });
})

app.get('/subCategory', (req, res) => {
    const sql = "SELECT * FROM sub_category";
    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Server error");
            return;
        }
        res.json(result);
    });
})

app.get('/item', (req, res) => {
    const sql = "SELECT * FROM item";
    con.query(sql, function (err, result) {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Server error");
            return;
        }
        res.json(result);
    });
})

app.put('/category/:id', (req, res) => {
    const { id } = req.params;
    const { category_name,
        category_image,
        category_descriptions,
        category_tax_app,
        category_tax,
        category_tax_type} = req.body;

    const sql = `
        UPDATE category
        SET category_name = ?,
            category_image = ?,
            category_descriptions = ?,
            category_tax_app = ?,
            category_tax = ?,
            category_tax_type = ?
        WHERE category_id = ?
    `
    con.query(sql, [category_name, category_image, category_descriptions, category_tax_app, category_tax, category_tax_type, id], (err, result) => {
        if (err) {
            console.error("Error updating category:", err);
            return res.status(500).json({ error: "Database error while updating category" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({ message: "Category updated successfully" });
    })
})

app.put('/subCategory/:id', (req, res) => {
    const { id } = req.params;
    const { sub_category_name,
        sub_category_image,
        sub_category_descriptions,
        sub_category_tax_app,
        sub_category_tax} = req.body;

    const sql = `
        UPDATE sub_category
        SET sub_category_name = ?,
            sub_category_image = ?,
            sub_category_descriptions = ?,
            sub_category_tax_app = ?,
            sub_category_tax = ?,
        WHERE sub_category_id = ?
    `
    con.query(sql, [sub_category_name, sub_category_image, sub_category_descriptions, sub_category_tax_app, sub_category_tax, id], (err, result) => {
        if (err) {
            console.error("Error updating sub category:", err);
            return res.status(500).json({ error: "Database error while updating sub category" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Sub category not found" });
        }

        res.json({ message: "Sub category updated successfully" });
    })
})

app.put('/item/:id', (req, res) => {
    const { id } = req.params;
    const { item_name,
        item_image,
        item_descriptions,
        item_base_amount,
        item_discount,
        item_tax_app,
        item_tax,
        item_tax_type } = req.body;
    
    const item_total_amount = item_base_amount - item_discount;

    const sql = `
        UPDATE item
        SET item_name = ?,
            item_image = ?,
            item_descriptions = ?,
            item_base_amount = ?,
            item_discount = ?,
            item_tax_app = ?,
            item_tax = ?,
            item_tax_type = ?,
            item_total_amount = ?
        WHERE item_id = ?
    `
    con.query(sql, [item_name, item_image, item_descriptions, item_base_amount, item_discount, item_tax_app, item_tax, item_tax_type, item_total_amount, id], (err, result) => {
        if (err) {
            console.error("Error updating item:", err);
            return res.status(500).json({ error: "Database error while updating item" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "item not found" });
        }

        res.json({ message: "item updated successfully" });
    })
})

app.get('/item/search', (req, res) => {
    const name = req.query.name;
    const sql = `
        SELECT * FROM item WHERE item_name = ?`
    con.query(sql, [name], (err, result) => {
        if (err) {
            console.error("Error updating item:", err);
            return res.status(500).json({ error: "Database error while searching item" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "item not found" });
        }

        res.json(result);
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
