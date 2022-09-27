import listProductService from "../../services/products/listProduct.service";

const listProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await listProductService(id);

    if (res.rowCount === 0) {
      throw new Error(error);
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listProductController;
