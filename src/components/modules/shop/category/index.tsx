import { Button } from "@/components/ui/button"
import CreateCategoryModal from "./CreateCategoryModal"
import { ICategory } from "@/types"

type TCategoriesProps = {
    categories: ICategory[]
}

const ManageCategories = ({categories}:TCategoriesProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Manage Categories</h1>
      <CreateCategoryModal/>
      </div>
    </div>
  )
}

export default ManageCategories
