import React from "react";
import { SearchUtils } from "../../lib/utils/SearchUtils";
import SearchBarMol from "./SearchBarMol";
import SearchRecentMol from "./SearchRecentMol";

function SearchModalTmp() {

  SearchUtils.getSearchAllList(
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXJvbWFtZUBuYXZlci5jb20iLCJpZCI6Niwibmlja05hbWUiOiLsi6zrk5zroIHtlZxf7JmB7JmBIiwiZW1haWwiOiJjdXJvbWFtZUBuYXZlci5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNjY3MDUzMTkyLCJleHAiOjE2NjcwNTM3OTJ9.wFhiNdRh1T56_oq11WlMvatu5HaX40YgnQ9clUy0m_g",
    "유니콘",
    "1",
    "1"
  )


  return (
    <>
      <SearchBarMol />
      <SearchRecentMol/>
    </>
  );
}

export default SearchModalTmp;
