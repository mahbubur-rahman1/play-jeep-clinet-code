import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `jeep/${title}`;
    },[title])
}

export default useTitle;