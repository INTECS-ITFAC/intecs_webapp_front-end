import React from "react";
import "./EventPagination.scss";
import ReactPaginate from "react-paginate";
import EventCard from "../eventCard/EventCard";
import { PostSchema } from "./Interfaces";

class EventPagination extends React.Component<
  { data: any },
  {
    offset: number;
    postsList: PostSchema[];
    perPage: number;
    currentPage: number;
    pageCount: number;
    posts: JSX.Element[];
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      offset: 0,
      postsList: [
        {
          id: 1,
          title: "Post Title 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odit doloremque ad dicta " +
            "aut maiores tempora. Natus explicabo quam reprehenderit nam nihil dignissimos? Fugit nemo temporibus, " +
            "eos dolores, odit sunt, a aut dolor tenetur totam velit incidunt mollitia explicabo inventore? Unde " +
            "minima tenetur vitae quos eveniet facilis repudiandae doloribus nisi?",
          imgUrl: require("../../assets/images/events/event1.png"),
          date: "12/05/2020",
        },
        {
          id: 2,
          title: "Post Title 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odit doloremque ad dicta " +
            "aut maiores tempora. Natus explicabo quam reprehenderit nam nihil dignissimos? Fugit nemo temporibus, " +
            "eos dolores, odit sunt, a aut dolor tenetur totam velit incidunt mollitia explicabo inventore? Unde " +
            "minima tenetur vitae quos eveniet facilis repudiandae doloribus nisi? eos dolores, odit sunt, a aut dolor " +
            "tenetur totam velit incidunt mollitia explicabo inventore? Unde. eos dolores, odit sunt, a aut dolor " +
            "tenetur totam velit incidunt mollitia explicabo inventore? Unde ",
          imgUrl: require("../../assets/images/events/event2.jpg"),
          date: "12/06/2020",
        },
        {
          id: 3,
          title: "Post Title 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odit doloremque ad dicta " +
            "aut maiores tempora. Natus explicabo quam reprehenderit nam nihil dignissimos? Fugit nemo temporibus, " +
            "eos dolores, odit sunt, a aut dolor tenetur totam velit incidunt mollitia explicabo inventore? Unde " +
            "minima tenetur vitae quos eveniet facilis repudiandae doloribus nisi?",
          imgUrl: require("../../assets/images/events/event1.png"),
          date: "20/05/2020",
        },
      ],
      perPage: 6,
      currentPage: 0,
      pageCount: 0,
      posts: [],
    };

    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount -> this.props", this.props);

    // debugger;
    if (!this.props.data.loading) {
      this.LoadPosts();
    }
  }

  LoadPosts() {
    //axios.get can be added here when service is defined
    // debugger;
    const postsSlice = this.props.data.data.data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    const post = postsSlice.map((p: any) => (
      <React.Fragment>
        <EventCard event={p} />
        <br />
      </React.Fragment>
    ));
    this.setState({
      pageCount: Math.ceil(this.props.data.data.length / this.state.perPage),

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

  render() {
    return (
      <div className="w-100 h-100 text-center">
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
