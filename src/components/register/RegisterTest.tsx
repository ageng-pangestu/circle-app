import { useState } from "react";

const RegisterTest = () => {
  const [listTodo, setListTodo] = useState<string[]>([]);
  const [form, setForm] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setListTodo([...listTodo, form]);
          setForm("");
        }}
      >
        <div className="">
          <label htmlFor="">To do</label>
          <input type="text" value={form} onChange={(e) => setForm(e.target.value)} />
        </div>
        <button type="submit">To do</button>
      </form>

      <ul>
        {listTodo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterTest;
