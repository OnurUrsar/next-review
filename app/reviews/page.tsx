import Link from "next/link";
import Heading from "@/app/components/Heading";

function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border rounded shadow hover:shadow-xl w-80">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="hollow knight image"
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="font-semibold font-orbitron text-center py-1">
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className="bg-white border rounded shadow hover:shadow-xl w-80">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="stardew valley image"
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="font-semibold font-orbitron text-center py-1">
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default ReviewsPage;
