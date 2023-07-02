export interface User {
	name: string,
	
}
// columnId -  местоположение задачи
export interface Task {
    taskName: string,
    taskId: number,
    taskContent: string,
    columnId: number,
}