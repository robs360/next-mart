
import CreateCategoryModal from "./CreateCategoryModal"

const ManageCategories=()=>{
    return(
        <div>
             <div className="flex justify-between">
             <h1 className="text-xl">Manage categories here</h1>
             <CreateCategoryModal></CreateCategoryModal>
             </div>
        </div>
    )
}
export default ManageCategories