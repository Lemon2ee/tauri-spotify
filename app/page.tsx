"use client"

import Image from "next/image";
import {appWindow} from "@tauri-apps/api/window";
import {useRouter} from "next/navigation";


export default function Home() {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/test');
    };

    return (
        <div>
            <button onClick={handleNavigation}>
                this is a button
            </button>
        </div>
    );
}
