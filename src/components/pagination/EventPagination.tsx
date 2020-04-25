import React from "react";
import "./EventPagination.scss";
import ReactPaginate from "react-paginate";

class EventPagination extends React.Component<
  {},
  {
    offset: number;
    postsList: string[];
    perPage: number;
    currentPage: number;
    pageCount: any;
    posts: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      offset: 0,
      postsList: [
        "Post1",
        "Post2",
        "Post3",
        "Post4",
        "Post5",
        "Post6",
        "Post7",
        "Post8",
        "Post9",
        "Post10",
        "Post11",
        "Post12",
        "Post13",
        "Post14",
      ],
      perPage: 6,
      currentPage: 0,
      pageCount: null,
      posts: null,
    };

    this.paginate = this.paginate.bind(this);
  }

  LoadPosts() {
    //axios.get can be added here when service is defined
    const postsSlice = this.state.postsList.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    const post = postsSlice.map((p) => (
      <React.Fragment>
        {p}
        <br />
      </React.Fragment>
    ));
    this.setState({
      pageCount: Math.ceil(this.state.postsList.length / this.state.perPage),
      posts: post,
    });
  }

  paginate = (e: { selected: any }) => {
    this.setState(
      {
        offset: e.selected * this.state.perPage,
        currentPage: e.selected,
      },
      () => {
        this.LoadPosts();
      }
    );
  };

  componentDidMount() {
    this.LoadPosts();
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.posts}
        <ReactPaginate
          previousLabel={"«"}
          nextLabel={"»"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.paginate}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        >
          >
        </ReactPaginate>
      </div>
    );
  }
}

export default EventPagination;
