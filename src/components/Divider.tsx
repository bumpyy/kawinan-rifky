export default function Divider({
  imageUrl = "assets/images/divider.png",
}: {
  imageUrl?: string;
}) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      className="max-w-lg container my-8 mx-auto"
    >
      <img
        draggable="false"
        src={imageUrl}
        className="divider has-text-centered"
        alt="~~~"
      />
    </div>
  );
}
