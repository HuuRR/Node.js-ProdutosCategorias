import listCategoryService from "../../services/categories/listCategory.service";

const listCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await listCategoryService(id);

    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default listCategoryController;
