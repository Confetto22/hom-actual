import "./YouTube.css";

const YouTube = (props) => {
  return (
    <iframe
      width="300px"
      height="315"
      src={props.link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="ytVideo"
      style={props.styling}
    ></iframe>
  );
};

export default YouTube;
{
  /* <iframe
  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fhomchapel%2Fvideos%2F352191314508255%2F&show_text=false&width=560&t=0"
  width="560"
  height="314"
  style="border:none;overflow:hidden"
  scrolling="no"
  frameborder="0"
  allowfullscreen="true"
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  allowFullScreen="true"
></iframe>; */
}
