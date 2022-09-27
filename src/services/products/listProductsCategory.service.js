import database from "../../database";

const listProductsCategoryService = async (id) => {
  try {
    const res = await database.query(
      "SELECT products.name, products.price, categories.name category FROM products RIGHT JOIN categories ON products.category_id = categories.id WHERE categories.id = $1",
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error(error);
    }

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsCategoryService;
