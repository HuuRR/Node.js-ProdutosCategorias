import database from "../../database";

const listCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT name FROM categories WHERE id = $1",
      [id]
    );

    if (res.rowCount === 0) {
      throw "Invalid Category";
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listCategoryService;
