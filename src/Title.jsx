import "./index.css";

function Title({locked}) {
  return <h1 className="title">
    {
    locked ? <span>Limit! Buy <b>Pro</b> Version for &gt;5 </span> :
    "Fancy Counter"
    }
  </h1>;
}

export default Title;
