import { FaGithub } from "react-icons/fa";

export function Header() {
    const openSponsorPage = () => {
        const link = document.createElement('a')
        link.href = "https://github.com/Matheus-gs/comunidade-academica"
        link.target = "_blank"
        link.click()
    }
    return (
        <div className="flex items-center justify-between py-2 px-3 cursor-pointer">
            <h2 className="text-white">Comunidade Acadêmica</h2>
            <FaGithub className="text-[24px] text-white" onClick={openSponsorPage} />
        </div>
    )
}