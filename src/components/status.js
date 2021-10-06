import { connect } from "react-redux";

const Status = (props) => {
  let currentLeader = { name: "No Leader", votes: 0 };

  let leader = props.candidates.reduce((winning, record) => {
    let r = record.votes > winning.votes ? record : winning;
    console.log(r);
    return r;
  }, currentLeader);

  return (
    <section>
      <span>Current Leader: {leader.name}</span>
      <br />
      <span>total votes: {props.totalVotes}</span>
    </section>
  );
};

const mapStateToProps = (state) => ({
  totalVotes: state.votes.totalVotes,
  candidates: state.candidates,
});

export default connect(mapStateToProps)(Status);
