import React from "react"

interface TodoProps {
    todo: {
        id: string,
        content: string | null,
        done: boolean | null,
        priority: "high" | "medium" | "low" | null | undefined
    }
}

export const TodoCard: React.FC<TodoProps> = ({ todo }) => {
    return (
        <div>
            {todo.content ? <p>{todo.content}</p> : ''}
            <p>{todo.done ? 'Done' : 'Not yet done'}</p>
        </div>
    )
}

