import {requestInstance} from "../config/requestInstance";
import TaskCategoryModel from "./models/TaskCategoryModel.js";

class TaskCategoryService {
    //apis used for task categories requests
    api = {
        main: '/categories' //main api
        // example get /categories
    }

    //parameters used in apis
    params = {
        search: "searchTerm="
    }

    //this returns list of categories
    //optional - send query for search
    getAll(query){
        // if search query is passed to method, add it to api
        const queryParam = query?.length > 0 ? `?${this.params.search}${query}` : '';
        return requestInstance.get(`${this.api.main}${queryParam}`)
            .then(r => r?.data?.map(item => new TaskCategoryModel(item)))
            .catch(err => Promise.reject(err))
    }

    //this returns single category
    get(id){
        return requestInstance.get(`${this.api.main}/${id}`)
            .then(r => new TaskCategoryModel(r.data))
            .catch(err => Promise.reject(err))
    }

    add(data){
        const formData = {...data};
        return requestInstance.post(this.api.main, formData)
            .then(r => new TaskCategoryModel(r.data))
            .catch(err => Promise.reject(err))
    }

    edit(data){
        const formData = {...data};
        return requestInstance.put(`${this.api.users}/${data?.id}`, formData)
            .then(r => new TaskCategoryModel(r.data))
            .catch(err => Promise.reject(err))
    }

    delete(id){
        return requestInstance.delete(`${this.api.main}/${id}`)
            .then(r => new TaskCategoryModel(r.data))
            .catch(err => Promise.reject(err))
    }


}

export const taskCategoryService = new TaskCategoryService();