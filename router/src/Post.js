import React from "react";
import queryString from "query-string"; // query-string npm 패키지 import

const Posts = ({ match, location }) => { // match: props.match, location: props.location
    const result = queryString.parse(location.search);
    console.log(result); // http://localhost:3000/posts/2019/09?sortBy=newest&approved=true 접속 시 결과: {approved: "true", sortBy: "newest"}

    /* query-string을 이용한 값 접근 */
    const approved = result.approved;
    const sortBy = result.sortBy;

    return (
        <div>
            <h1>Posts</h1>
            <p>Year: {match.params.year}, Month: {match.params.month}</p>
            <p>Approved: {approved}</p>
            <p>SortBy: {sortBy}</p>
        </div>
    );
};

export default Posts;