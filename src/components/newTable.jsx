import { Fragment } from "react";
import './style.css';

const data = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany", 
    description: "Futterkiste is a Germany company of owner Anders"
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Francisco Chang",
    country: "Mexico", 
    description: "Moctezuma is a Meican company of owner Chang"
  },
  {
    company: "Judith Hilld",
    contact: "Ecliston Hall",
    country: "EUA", 
    description: "Hilld is american company of owner Hall"
  },
  {
    company: "Tesla motors",
    contact: "Ellon Musk",
    country: "Canada", 
    description: "Tesla is a canadian company of owner Ellon Musk"
  }  
];

export default function NewTable() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <Fragment key={`${index}${row.company}`}>
              <tr>
                <td>{row.company}</td>
                <td>{row.contact}</td>
                <td>{row.country}</td>
              </tr>              
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}