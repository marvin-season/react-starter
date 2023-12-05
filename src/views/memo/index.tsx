import React, {useEffect, useMemo, useState} from "react";

export const Memo = () => {
    console.log('rerender')

    const [userInfo, setUserInfo] = useState({
        username: 'marvin',
        password: '123456'
    })

    const [count, setCount] = useState(0)


    const id = useMemo(() => {
        console.log('aa')
        return userInfo.username + userInfo.password
    }, [userInfo]);

    useEffect(() => {
        console.log('userInfo', userInfo)
    }, [userInfo]);


    return (
        <>
            <strong>{id}</strong>
            <strong>{count}</strong>

            <button onClick={() => {
                setUserInfo({
                    ...userInfo,
                    username: 'marvin',
                    password: '123456'
                })
            }}>click
            </button>
            <button onClick={() => {
                setCount(count + 1)
            }}>count
            </button>
        </>
    );
};