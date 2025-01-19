import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '../store/atoms/UserData';
import axios from 'axios';

const FetchUser = () => {
    const [user, setUser] = useRecoilState(userAtom);

    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/");
                const userData = response.data.results[0];
                if (isMounted) {
                    setUser(userData);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchUser();

        return () => {
            isMounted = false;
        };
    }, [setUser]);

    console.log(user)

    return null;
};

export default FetchUser;
