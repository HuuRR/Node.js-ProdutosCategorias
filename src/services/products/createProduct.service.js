import database from "../../database";

const createProductService = async (name, price, category_id) => {
  try {
    const alreadyExists = await database.query(
      "SELECT name FROM products WHERE name = $1",
      [name]
    );

    if (alreadyExists.rows.length != 0) {
      throw "Product already exists";
    }

    const res = await database.query(
      "INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3) RETURNING *",
      [name, price, category_id]
    );

    return { message: "Product created", product: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default createProductService;
