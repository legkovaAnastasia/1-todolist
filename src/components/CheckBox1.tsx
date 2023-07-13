import React, {ChangeEvent} from 'react';
type PropsType = {
    checked: boolean
    callBack: (isDone: boolean)=> void
}
export const CheckBox1 = (props: PropsType) => {
    const changeIsDoneHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        props.callBack(event.currentTarget.checked)
    }
    return (
        <input type='checkbox' checked={props.checked} onChange={changeIsDoneHandler}/>
    );
};

// export default CheckBox1;/