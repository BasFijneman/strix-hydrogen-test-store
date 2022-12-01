import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function FeaturedCollections() {
    const {
        data: { collections },
    } = useShopQuery({
        query: QUERY,
        cache: CacheLong(),
    });

    return (
        <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
            <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">Collections</h2>
            <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  false false">
                {collections.nodes.map((collection) => {
                    return (
                        <Link key={collection.id} to={`/collections/${collection.handle}`}>
                            <div className="bg-gray-50">
                                <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                                    <div className="sm:flex sm:items-baseline sm:justify-between">
                                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                            Shop by Category
                                        </h2>
                                        <a
                                            href="#"
                                            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
                                        >
                                            Browse all categories
                                            <span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>

                                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                                        <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                                            {collection?.image && (
                                                <Image
                                                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                                                    width={"100%"}
                                                    height={"100%"}
                                                    alt={`Image of ${collection.title}`}
                                                    data={collection.image}
                                                />
                                            )}
                                            <div
                                                aria-hidden="true"
                                                className="bg-gradient-to-b from-transparent to-black opacity-50"
                                            />
                                            <div className="flex items-end p-6">
                                                <div>
                                                    <h3 className="font-semibold text-white">
                                                        <a href="#">
                                                            <span className="absolute inset-0" />
                                                            {collection.title}
                                                        </a>
                                                    </h3>
                                                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                                                        Shop now
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                                            {collection?.image && (
                                                <Image
                                                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                                                    width={"100%"}
                                                    height={336}
                                                    alt={`Image of ${collection.title}`}
                                                    data={collection.image}
                                                />
                                            )}
                                            <div
                                                aria-hidden="true"
                                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                            />
                                            <div className="flex items-end p-6 sm:absolute sm:inset-0">
                                                <div>
                                                    <h3 className="font-semibold text-white">
                                                        <a href="#">
                                                            <span className="absolute inset-0" />
                                                            {collection.title}
                                                        </a>
                                                    </h3>
                                                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                                                        Shop now
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                                            {collection?.image && (
                                                <Image
                                                    className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                                                    width={"100%"}
                                                    height={336}
                                                    alt={`Image of ${collection.title}`}
                                                    data={collection.image}
                                                />
                                            )}
                                            <div
                                                aria-hidden="true"
                                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                            />
                                            <div className="flex items-end p-6 sm:absolute sm:inset-0">
                                                <div>
                                                    <h3 className="font-semibold text-white">
                                                        <a href="#">
                                                            <span className="absolute inset-0" />
                                                            {collection.title}
                                                        </a>
                                                    </h3>
                                                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                                                        Shop now
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 sm:hidden">
                                        <a
                                            href="#"
                                            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                            Browse all categories
                                            <span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            


                            {/* <div className="grid gap-4">
                                {collection?.image && (
                                    <Image
                                        className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                                        width={"100%"}
                                        height={336}
                                        alt={`Image of ${collection.title}`}
                                        data={collection.image}
                                    />
                                )}
                                <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                                    {collection.title}
                                </h2>
                            </div> */}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

const QUERY = gql`
    query FeaturedCollections {
        collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
            nodes {
                id
                title
                handle
                image {
                    altText
                    width
                    height
                    url
                }
            }
        }
    }
`;
