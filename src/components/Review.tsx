import MarkdownPreview from "@uiw/react-markdown-preview";
import Loader from "./Loader";

const Review = ({
  review,
  isGenerating,
}: {
  review: string;
  isGenerating: boolean;
}) => {
  return (
    <div className="h-full w-6/12 relative overflow-scroll">
      {isGenerating ? (
        <Loader />
      ) : (
        <MarkdownPreview
          source={review}
          style={{
            fontSize: "15px",
            minHeight: "100vh",
            padding: "20px",
            backgroundColor: "#000",
            color: "#ddd",
            overflow: "auto",
            height: "100%",
          }}
        />
      )}
    </div>
  );
};

export default Review;
