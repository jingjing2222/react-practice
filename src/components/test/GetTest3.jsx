import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function GetTest3() {
    const [show, setShow] = useState('Form')
    const onChangeHandler = (e) => setShow(e.target.value)
    return (
        <>
            <div style={{ fontSize: 25 }}>GetTest3</div>
            <hr />
            <select style={{ display: 'block' }} onChange={onChangeHandler}>
                <option value='Form'>Form</option>
                <option value='Element'>Element</option>
            </select>
            <Choice show={show} />
        </>
    )
}

function Choice({ show }) {
    const { register, handleSubmit } = useForm()
    /*register = form안에 데이터 처리, <input type='password' {...register('password')}> */
    /* handleSubmit form안에 submit에 연동됨, button onClick에도 가능한
    <form onsubmit={handlesubmit(()=>console.log(콜백함수입니다.))}> 내부에는 callback 함수가 들어가야함*/
    const onSubmit = (data) => console.log(data)
    {
        return show === 'Form' ? (
            <Type1 register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
        ) : (
            <Type2 register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />
        )
    }
}

function Type1({ register, handleSubmit, onSubmit }) {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='id'>ID : </label>
            <input
                id='id'
                type='id'
                placeholder='ID'
                {...register('id')} //{id:{value}}
            ></input>
            <div />
            <label htmlFor='passsword'>password : </label>
            <input
                id='password'
                type='password'
                placeholder='password'
                {...register('password')} //{password:{value},}
            ></input>
            <div></div>
            <button type='submit'>제출</button>
        </form>
    )
}

function Type2({ register, handleSubmit, onSubmit }) {
    return (
        <>
            <label htmlFor='id'>ID : </label>
            <input id='id' type='id' placeholder='ID' {...register('id')}></input>
            <div />
            <label htmlFor='passsword'>password : </label>
            <input
                id='password'
                type='password'
                placeholder='password'
                {...register('password')}
            ></input>
            <div></div>
            <button type='submit' onClick={handleSubmit(onSubmit)}>
                제출
            </button>
        </>
    )
}
