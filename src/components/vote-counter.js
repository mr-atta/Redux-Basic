import { connect } from "react-redux";
import { increment, disable, reset } from "../store/candidates";

const VotesCounter = (props) => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <td>Candidate</td>
            <td>Votes</td>
            <td>PCT</td>
          </tr>
        </thead>
        {/* 
                    3 / 10
                0.3333333333333333333333333333333333333333333333 
                .toFixed(2) = 0.33 = 33.33 %
                */}
        <tbody>
          {props.candidates.map((candidate, idx) => (
            <tr
              className={candidate.disabled ? "disabled" : ""}
              onDoubleClick={() => props.disable(candidate)}
              onClick={() =>
                candidate.disabled ? {} : props.increment(candidate)
              }
              key={idx}
            >
              <td>{candidate.name}</td>
              <td>{candidate.votes}</td>
              <td>
                {candidate.votes
                  ? ((candidate.votes / props.votes) * 100).toFixed(2) + "%"
                  : "0%"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  candidates: state.candidates,
  votes: state.votes.totalVotes,
});

const mapDispatchToProps = { increment, disable, reset };

// const mapDispatchToProps = {
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//  };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
