import createProductService from "../../services/products/createProduct.service";

const createProductController = async (req, res) => {
  const { name, price, category_id } = req.body;

  try {
    const product = await createProductService(name, price, category_id);

    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default createProductController;
