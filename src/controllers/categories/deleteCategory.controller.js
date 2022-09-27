import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteCategoryService(id);

    return res.status(204).json(deletedCategory);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default deleteCategoryController;
