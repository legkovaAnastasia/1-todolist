import type {Meta, StoryObj} from '@storybook/react';

import React, {ChangeEvent, useState} from "react";
import TextField from "@mui/material/TextField/TextField";
import {EditableSpan} from "../EditableSpan";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
    title: 'Example/EditableSpan',
    component: EditableSpan,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        // value: {
        //     description: 'Start value of EditableSpan'
        // },
        onChange: {
            action: 'clicked',
            description: 'Value of EditableSpan changed'
        }
    },
    args:{
        value:'HTML'
    }
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EditableSpanStory: Story = {};

// export const EditableSpan = () => {
//     let [editMode, setEditMode] = useState(false);
//     let [title, setTitle] = useState(props.value);
//
//     const activateEditMode = () => {
//         setEditMode(true);
//         setTitle(props.value);
//     }
//     const activateViewMode = () => {
//         setEditMode(false);
//         props.onChange(title);
//     }
//     const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value)
//     }
//
//     return editMode
//         ?    <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
//         : <span onDoubleClick={activateEditMode}>{props.value}</span>
// }

// export const TaskPresentationStory:Story = {
//     render: ()=> <TaskPresentation/>
// }