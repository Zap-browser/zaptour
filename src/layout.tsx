export default function Layout({children}: {children: React.ReactNode}) {
    
    return (
        <div className="bg-[linear-gradient(135deg,_#d91784_0%,_#ef3354_25%,_#ef4944_50%,_#f56a3b_75%,_#fb9e2c_100%)] relative dark overflow-hidden">
            <div className="absolute inset-0 clip-slant-top bg-white h-[500px] w-[200%] left-[-200px] top-[-50px] rotate-12"></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
