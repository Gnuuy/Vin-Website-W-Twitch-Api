import Link from 'next/link'
import Image from 'next/image'
import Logo from './NavBarLogo.png'

export default function NavBar(){
    return (
        <nav>
            <div className="nav-container-logo">
            <Image
                src={Logo}
                width={50}
                alt=""
            />
            <h1>Vin's Website</h1>
            </div>
            <div className="nav-container-links">
                <Link className="nav-button-link" href="/">Home</Link>
                <Link className="nav-button-link" href="/community">Community</Link>
                <Link className="nav-button-link" href="/merchandise">Merchandise</Link>
            </div>
        </nav>
    )
}