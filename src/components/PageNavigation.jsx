import React from "react";
import Button from "@material-ui/core/Button";

export default function PageNavigation({ page, totalPages, handleSearch }) {
  return (
    <div className="PageNavigation" >
      <Button id="previous" color="primary" onClick={handleSearch}>
        {"<"}
      </Button>
      Page: {page}/{totalPages}
      <Button id="next" color="primary" onClick={handleSearch}>
        {">"}
      </Button>
    </div>
  );
}
