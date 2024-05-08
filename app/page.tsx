import Link from "next/link";
import Heading from "@/app/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";

export const metadata = {
  title: "Indie Gamer",
  description: "Only the best indie games, reviewed for you.",
};

async function HomePage() {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-white border rounded shadow hover:shadow-xl w-80 sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt="stardew valley image"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron text-center py-1 sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
