import React, { useState } from "react";
import "./todo.css";
import { addTodo, removeTodo, deleteTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="top-title">
          <p className="title-text">Todo App ✅ </p>
        </div>

        <div className="child-div">
          <figure>
            <figcaption>Add tasks 📗</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add items..."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <>
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Delete Item"
                        onClick={() => dispatch(deleteTodo(elem.id))}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(removeTodo())}
            >
              <span> Check List </span>
            </button>
          </div>

          <div className="footer">
            Made with ❤️ by Parizat Binta Kabir
            <br />{" "}
            <a
              href="https://github.com/parizat-hridi"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa fa-github"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  marginRight: "35px",
                }}
              ></i>
            </a>{" "}
            <a href="mailto: parizatbintekabir@gmail.com">
              <i
                class="fa fa-envelope"
                style={{ backgroundColor: "transparent", color: "white" }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
