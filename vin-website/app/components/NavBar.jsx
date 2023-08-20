import Link from 'next/link'

export default function NavBar(){
    return (
        <nav>
            <h1>Nav Bar</h1>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
        </nav>
    )
}