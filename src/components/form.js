import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {formAction} from '../actions/form.action'

const Form = () => {
    const dispatch = useDispatch()
    const res = useSelector(state => state.formReducer.result)
    const formClicked = () => {
        dispatch(formAction())
    }
    return(
        <div>
            <p>asdasd</p>
            {res}
            <button onClick={formClicked}>click</button>
        </div>
    )
}

export default Form