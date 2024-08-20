import { IntegrationResponse } from "aws-cdk-lib/aws-apigateway"
import React from "react"
import internal from "stream"

enum Priority {
    High = "high",
    Medium= "medium",
    Low = "low"
}

interface TodoProps {
    todo: {
        id: number,
        content: string,
        done: boolean,
        priority: Priority
    }
}

export const TodoCard: React.FC<TodoProps> = ({ todo }) => {
    console.log(todo)
    return (
        <div>

        </div>
    )
}

