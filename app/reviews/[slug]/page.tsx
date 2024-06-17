import Heading from "@/app/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import { title } from "process";
import ShareLinkButton from "../../components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: any) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

async function ReviewPage({ params: { slug } }: any) {
  const review = await getReview(slug);
  console.log("Review Page rendering", slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>

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
