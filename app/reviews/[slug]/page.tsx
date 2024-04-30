import Heading from "@/app/components/Heading";
import { getReview } from "@/lib/reviews";

async function ReviewPage({ params: { slug } }: any) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
        alt="stardew valley image"
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}

export default ReviewPage;
