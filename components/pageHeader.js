import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import styles from "./pageHeader.module.css";

export default function PageHeader() {
    return (
        <header className={styles.page_header}>
            <div className={styles.header_title}>
            <Image src={Logo} alt="Food Blog Logo" width={100} height={100} />
                <h1>Food Blog</h1>
            </div>

            <nav className={styles.header_nav}>
                <Link href="/">Home</Link>
                <Link href="/meals">Meals</Link>
                <Link href="/meals/share">Share</Link>
                <Link href="/community">Community</Link>
            </nav>
        </header>
    )
}