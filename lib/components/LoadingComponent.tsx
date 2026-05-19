"use client"
const LoadingComponent = ({ text }: { text: string }) => {
    return (
        <div className='text-center py-6 animate-pulse'>
            {text}
        </div>
    );
};

export default LoadingComponent;