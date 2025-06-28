import { IconLink, IconUnlink } from "@tabler/icons-react";
import { BackgroundBeams } from "./ui/background-beams";
import zap from "../assets/zap.png";
import btfs from "../assets/btfs.webp";
import { cn } from "@/lib/utils";

export function LognSideView({hasPass}: { hasPass?: boolean | null}) {
    return (
        <div className="h-full w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl flex items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                <img src={zap} alt="" className="w-[110px] h-[110px]" />
                { hasPass == null ? 
                    <IconUnlink className="text-white mx-2" />
                :
                    <IconLink className="text-white mx-2" />
                }
                <img src={btfs} alt="" className={cn( "h-[70px] ml-5", (hasPass==null) && "grayscale" )} />
            </h1>
            { hasPass == null && 
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                The node is not connected yet, Please wait for a few seconds.
                </p>
            }
            { hasPass != null && hasPass? 
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Login to the Zap Dashboard to view the node data and more features like, injections, peer-seeking and many more.
                </p>
                :
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    To secure your node, First create a password for your node, then navigate further to access the dashboard and other features.
                </p>
            }
        </div>
        <BackgroundBeams />
        </div>
    );
}
