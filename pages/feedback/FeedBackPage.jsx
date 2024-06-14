import Layout from "../layouts/Layout.jsx";
import style from "./feedback.module.css";
import Feedback from "../../components/Feedback.jsx";

const FeedBackPage = () => {
  return (
    <Layout>
      <div className={style.feedPageContainer}>
        <Feedback />
      </div>
    </Layout>
  );
};

export default FeedBackPage;
