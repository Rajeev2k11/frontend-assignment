import './Table.css'
import PropTypes from 'prop-types';
function Table({data}) {

  return (
    <div >
        <table className="project-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project,index) => (
          <tr key={index+1}>
            <td>{project["s.no"]}</td>
            <td>{project["percentage.funded"] || "N/A"}</td>
            <td>{project["amt.pledged"] || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
        
    </div>
  )
};
Table.propTypes={
    data: PropTypes.array
};
export default Table