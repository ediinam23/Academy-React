class TaskCategoryModel {
    constructor(data) {
        this.id = data?.id;
        this.name = data?.name;
        this.code = data?.code;
        this.color = data?.color;
    }
}

export default TaskCategoryModel;