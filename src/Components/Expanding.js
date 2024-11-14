import { useState } from "react";


export default function Expanding() {
    
    const [isExpanded, setIsExpanded] = useState(false);

    const rightArrowUrl = "https://fareshare.org.uk/wp-content/plugins/fareshare/right.png";
    const downArrowUrl = "https://fareshare.org.uk/wp-content/plugins/fareshare/down.png";

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return {
        isExpanded,
        toggleExpand,
        rightArrowUrl,
        downArrowUrl,
    };
}




