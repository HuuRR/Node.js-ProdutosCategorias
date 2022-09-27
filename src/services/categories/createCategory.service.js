import database from "../../database";

const createCategoryService = async (name) => {
  try {
    const alreadyExists = await database.query(
      "SELECT name FROM categories WHERE name = $1",
      [name]
    );

    if (alreadyExists.rows.length != 0) {
      throw "Product already exists";
    }

    const res = await database.query(
      "INSERT INTO categories (name) VALUES ($1) RETURNING *",
      [name]
    );

    return {
      message: "Category created",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default createCategoryService;
