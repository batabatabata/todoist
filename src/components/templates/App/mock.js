const mockDatas = {
    todoTasks: [
        {
            id: 1,
            doneFlag: false,
            content: 'タスク1',
            layer: 1,
            childIds: [2, 3, 4],
        },
        {
            id: 2,
            doneFlag: false,
            content: 'タスク1.2',
            layer: 2,
            childIds: [],
        },
        {
            id: 3,
            doneFlag: false,
            content: 'タスク1.3',
            layer: 2,
            childIds: [],
        },
        {
            id: 4,
            doneFlag: false,
            content: 'タスク1.4',
            layer: 2,
            childIds: [5, 6],
        },
        {
            id: 5,
            doneFlag: false,
            content: 'タスク1.4.1',
            layer: 3,
            childIds: [],
        },
        {
            id: 6,
            doneFlag: false,
            content: 'タスク1.4.2',
            layer: 3,
            childIds: [],
        },
        {
            id: 7,
            doneFlag: false,
            content: 'タスク2',
            layer: 1,
            childIds: [],
        },
    ]
}

export default mockDatas