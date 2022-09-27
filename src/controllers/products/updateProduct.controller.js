import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;

  try {
    const product = await updateProductService(id, productData);
    return res
      .status(200)
      .json({ message: "Product updated", product: product });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateProductController;
