import { useForm } from 'react-hook-form'

export default function GetTest3() {
    const { register, handleSubmit } = useForm()
    /*register = form안에 데이터 처리, <input type='password' {...register('password')}> */
    /* handleSubmit form안에 submit에 연동됨 반드시 form에 쓸것
    <form onsubmit={handlesubmit(()=>console.log(콜백함수입니다.))}> 내부에는 callback 함수가 들어가야함*/
    const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <button type='submit'>제출</button>
        </form>
    )
}
