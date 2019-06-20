import React from "react";
import Button from "@material-ui/core/Button";

export default function PageNavigation({ page, handleSearch }) {
  return (
    <div>
      <Button id="previous" color="primary" className="PageNavigation" onClick={handleSearch}>
        {"<"}
      </Button>
      {page}/1000
      <Button id="next" color="primary" className="PageNavigation" onClick={handleSearch}>
        {">"}
      </Button>
    </div>
  );
}
