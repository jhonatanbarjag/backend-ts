import { Document, model, Schema } from "mongoose";

export type TTodolist = {
    title: string;
    description: string;
    done: boolean;
};

export interface ITodoList extends TTodolist , Document{};

const todoListSchema = new Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    done:{
        type: Boolean,
    },
    archived:{
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
    
}
);

const TodoList = model("TodoList", todoListSchema);
export default TodoList;