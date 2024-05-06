import Link from "next/link";
import Heading from "@/app/components/Heading";
import { getReviews } from "@/lib/reviews";

async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow hover:shadow-xl w-80"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt="hollow knight image"
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron text-center py-1">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsPage;
