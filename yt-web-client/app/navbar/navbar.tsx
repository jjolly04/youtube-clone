
'use client';

import Image from "next/image";

import Link from "next/link";
import styles from "./navbar.module.css";
import SignIn from "./sign-in";

import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import Upload from "./upload";

export default function Navbar() {

  //init user state
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    })

    //cleanup on unmount
    return () => unsubscribe();
  }); 

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoContainer}>
        <Image width={90} height={20}
          className={styles.logo}
          src="/youtube-logo.svg"
          alt="Youtube Logo"
        />
      </Link>
      {
        user && <Upload />

      }
      <SignIn user={user} />
    </nav>
  );
}
