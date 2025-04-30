import cs from "./Pagination.module.css";

export const Pagination = (props) => {
  const { pages, onClickPage, activePage } = props;

  return (
    <div className={cs.pagination}>
      {[...Array(pages)].map((_, index) => (
        <button key={index} className={activePage === index + 1 ? cs.active : ""} onClick={() => onClickPage(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};
