
interface ILinkCardProps {
    id?: number | string;
    label: string;
    href: string
}

export function LinkCard({label, href}: ILinkCardProps) {

    const openLinkPage = (href: string) => {
        const link = document.createElement('a')
        link.href = href
        link.target = "_blank"
        link.click()
    }

    return (
        <div onClick={() => openLinkPage(href)} className="w-full md:w-[120px] h-[120px] text-center flex items-center justify-center p-2 rounded-lg text-gray-800 bg-white shadow hover:brightness-95 transition-all cursor-pointer ease-in-out">
           {label}
        </div>
    )
}