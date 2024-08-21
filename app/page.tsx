import { revalidatePath } from "next/cache";

import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";

import Logout from "@/components/Logout";
import { TodoCard } from "@/components/TodoCard";

type Priority = "high" | "medium" | "low" | null | undefined

async function App() {
  const user = await AuthGetCurrentUserServer();
  const { data: todos } = await cookiesClient.models.Todo.list();

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    const prio = data.get("priority") as Priority;
    await cookiesClient.models.Todo.create({
      content: title,
      done: false,
      priority: prio,
    });
    revalidatePath("/");
  }

  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      {user && <Logout />}
      <form action={addTodo}>
        <input type="text" name="title" />
        <select name="priority" id="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos && todos.map((todo) => <li key={todo.id}><TodoCard todo={todo} /></li>)}
      </ul>
    </>
  );
}

export default App;