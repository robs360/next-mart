import { Upload, X } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
type TImageUploader = {
    previmage: string[] | [],
    setprevImage: Dispatch<SetStateAction<[] | string[]>>,
    setImage: Dispatch<SetStateAction<File[] | []>>
}
const NMimageUploader = ({ previmage, setprevImage, setImage }: TImageUploader) => {

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0]
        if (file) {
            setImage((prev: any) => [...prev, file])
        }
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setprevImage((prev: any) => [...prev, reader.result as string])
            }
            reader.readAsDataURL(file)
        }
        e.target.value = ''
    }
    const handlePreview=()=>{
        setprevImage([])
    }
    return (
        <div>
            <input id="imageUploader" onChange={handleImage} type="file" className="hidden w-full" multiple accept="image/*" />
            <div className="relative w-[118px] mx-auto">
                <label htmlFor="imageUploader" className="rounded-[10px] font-medium text-sm
            text-gray-600 text-center border-2 border-dashed block py-5 w-[115px] mx-auto"> <Upload className="size-5 mx-auto text-blue-600"></Upload> Upload Logo</label>
                <div className="absolute top-0">
                    {
                        previmage.map((image: string, idx: number) => <Image key={idx}
                            src={image} width={115} height={40} className="mx-auto" alt="" />)
                    }
                    {
                        previmage.length>0&&(<div onClick={handlePreview} className="absolute -top-0 -right-0"><X className="size-6 text-red-500"></X></div>)
                    }
                </div>
            </div>


        </div>
    )
}
export default NMimageUploader