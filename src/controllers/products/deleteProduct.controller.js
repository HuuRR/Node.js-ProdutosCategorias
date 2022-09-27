import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProductService(id);

    return res.status(204).json(deletedProduct);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default deleteProductController;
