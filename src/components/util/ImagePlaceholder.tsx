import { ImageIcon } from "lucide-react"

const ImagePlaceholder = () => {
    return (
        <div className="w-full min-h-[400px] rounded-lg bg-muted-foreground/30 grid place-items-center aspect-square md:aspect-auto">
            <ImageIcon size={80} className="text-muted-foreground" />
        </div>
    )
}

export default ImagePlaceholder