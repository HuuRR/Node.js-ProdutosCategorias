import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCategory = await updateCategoryService(id, name);

    return res.status(200).json(updatedCategory);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export default updateCategoryController;
