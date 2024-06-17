export default function ShareLinkButton() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="border px-2 py-1 hove:bg-orange-100 hover:text-slate-700 rounded text-slate-500 text-sm"
    >
      Share link
    </button>
  );
}
