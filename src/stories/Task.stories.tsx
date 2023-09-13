import type {Meta, StoryObj} from '@storybook/react';

import {AddItemFormPropsType} from "../AddItemForm";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import TextField from "@mui/material/TextField/TextField";
import {IconButton} from "@mui/material";
import {AddBox} from "@mui/icons-material";
import {action} from "@storybook/addon-actions"
import {Task} from "../Task";
import {TaskType} from "../Todolist";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'Example/Task',
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        task: {id: 'cvc', title: 'JS', isDone: true},
        todolistId: 'df21'
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TaskIsDoneStory: Story = {};
export const TaskIsNotDoneStory: Story = {
    args: {
        task: {id: '23cvc', title: 'HTML', isDone: false}
    }
};

export const TaskPresentation = () => {
    const [task, setTask] = useState({id: 'cvc', title: 'JS', isDone: true})
    return <Task changeTaskStatus={() => {
        setTask({...task, isDone: !task.isDone})
    }}
                 changeTaskTitle={(_,title)=>{
                     setTask({...task, title: title})
                 }}
                 removeTask={action('removeTask')}
                 task={task}
                 todolistId={'232456bhh'}/>
}

// export const TaskPresentationStory:Story = {
//     render: ()=> <TaskPresentation/>
// }