import listProductsCategoryService from "../../services/products/listProductsCategory.service";

const listProductsCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const productsByCategory = await listProductsCategoryService(id);

    return res.status(200).json(productsByCategory);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listProductsCategoryController;
