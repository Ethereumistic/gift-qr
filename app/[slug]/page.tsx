import { giftRegistry } from "@/lib/gifts";
import { CardContainer } from "../components/CardContainer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Correct type for Next.js 15 App Router dynamic parameters
type Params = Promise<{ slug: string }>;

export default async function GiftPage({ params }: { params: Params }) {
    const { slug } = await params;
    const config = giftRegistry[slug];

    if (!config) {
        notFound();
    }

    return (
        <div className="flex justify-center items-center h-screen p-8 relative">
            <Link
                href="/"
                className="absolute top-4 left-4 sm:top-8 sm:left-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-50 group"
            >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <CardContainer config={config} />
        </div>
    );
}

export function generateStaticParams() {
    return Object.keys(giftRegistry).map((slug) => ({
        slug,
    }));
}
