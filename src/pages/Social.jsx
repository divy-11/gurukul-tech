import { Link } from "react-router-dom";

const Social = () => {
    <div>
        <Link to={"https://www.linkedin.com/company/gurukul-foundation-ism/"}>
            <img
                className="absolute top-[5555px] left-[1444px] w-20 h-20 overflow-hidden"
                alt=""
                src="/mdilinkedin.svg"
            />
        </Link>
        <Link to={"https://www.instagram.com/gurukulfoundation_ism/"}>
            <img
                className="absolute top-[5555px] left-[1573px] w-20 h-20 overflow-hidden"
                alt=""
                src="/mdiinstagram.svg"
            />
        </Link>
        <Link to={"https://x.com/Gurukul_Found"}>
            <img
                className="absolute top-[5570px] left-[1345px] w-[50px] h-[50px] overflow-hidden object-cover"
                alt=""
                src="/primetwitter@2x.png"
            /></Link>
        <Link to={"mailto:gurukulfoundationism@gmail.com"}>
            <div className="absolute top-[5192px] left-[1101px] rounded-lg bg-deepskyblue w-[228px] h-[84px]" />
            <div className="absolute top-[5216px] left-[1130px] text-11xl font-semibold text-white">
                SUBSCRIBE
            </div>
        </Link>
    </div>
}
export default Social;