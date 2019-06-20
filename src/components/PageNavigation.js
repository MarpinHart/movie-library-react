import React from "react";
import Button from "@material-ui/core/Button";

export default function PageNavigation({ page, totalPages, handleSearch }) {
  return (
    <div>
      <Button id="previous" color="primary" className="PageNavigation" onClick={handleSearch}>
        {"<"}
      </Button>
      {page}/{totalPages}
      <Button id="next" color="primary" className="PageNavigation" onClick={handleSearch}>
        {">"}
      </Button>
    </div>
  );
}
