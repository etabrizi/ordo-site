import { useEffect } from 'react';
import Hub from '../components/Hub'
import { useRouter } from 'next/router'


const Success = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return (
        < Hub pageTitle="Thank you, your message has been received." >
            <div className="home-panel">
            </div>
        </Hub >
    )
}

export default Success
