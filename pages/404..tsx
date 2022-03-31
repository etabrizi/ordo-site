import { useEffect } from 'react';
import Hub from '../components/Hub'
import { useRouter } from 'next/router'


const PageNotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])

    return (
        < Hub activeNav='404' pageTitle="Sorry, the page could not be found." >
            <div className="home-panel">
            </div>
        </Hub >
    )
}

export default PageNotFound
