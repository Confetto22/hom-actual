import "./YouTube.css";

const YouTube = () => {
  return (
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/Ty0OfddxCm0?si=IApJKdLyFPQ522CZ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowfullscreen
      className="ytVideo"
    ></iframe>
  );
};

export default YouTube;
