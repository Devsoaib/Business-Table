import axios from 'axios'
import { toast } from "react-hot-toast"
import { SetALLProduct, SetTotal } from "../redux/state-slice/productSlice"
import { HideLoader, ShowLoader } from "../redux/state-slice/settingsSlice"
import store from "../redux/store/store"

const baseURL = 'http://localhost:5000/api/v1'

export const GetProductList = async (pageNo,perPage,searchKey) => {
    try {
        store.dispatch(ShowLoader())
        const URL = `${baseURL}/ProductList/${pageNo}/${perPage}/${searchKey}`
        const result = await axios.get(URL)
        store.dispatch(HideLoader())

        if (result.status === 200 & result.data["status"] === "success") {
            if (result.data["data"].length > 0) {
               store.dispatch(SetALLProduct(result.data["data"]))
               store.dispatch(SetTotal(result.data["total"]))
            }
            else{
                store.dispatch(SetALLProduct([]))
                store.dispatch(SetTotal(0))
                toast.error("No products found!")
            }
        }else{
            toast.error("===>Something went wrong")

        }
    } catch (error) {
        store.dispatch(HideLoader())
        toast.error("===>Something went wrong")
    }
}



