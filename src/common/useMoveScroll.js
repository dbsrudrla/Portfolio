import { useRef } from "react";

const useMoveScroll = () => {
    
    const e =  useRef<HTMLDivElement>(null);

    const onMoveToElement =  () => {
        e.current?.scrollIntoView({ behavior : 'smooth', block : 'Home'});
    };

    return { e, onMoveToElement};
};

export default useMoveScroll;