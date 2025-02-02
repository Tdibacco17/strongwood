import UnsubscribePageClient from "./page.client";

type Params = { slug: string }

export default function UnsubscribePage({ searchParams }: { searchParams: Params }) {
    const { slug } = searchParams;

    return (
        <UnsubscribePageClient slug={slug} />
    )
}