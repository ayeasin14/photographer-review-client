import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ShootGrapy`;
    }, [title])
};

export default useTitle;