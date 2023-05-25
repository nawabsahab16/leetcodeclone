import Link from 'next/link';
import React from 'react';

type navbarProps = {
    
};

const navbar:React.FC<navbarProps> = () => {
    
    return <div className="flex-items-center justify-between sm:px-12 px-2 md:px-24" >
        <Link href="/" className="flex items-center justify-center h-20">
            <img src="/logo.png" alt="LeetCode Clone" className="h-full" />
        </Link>
    </div>
}
export default navbar;