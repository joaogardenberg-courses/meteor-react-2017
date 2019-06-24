import React               from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Employees }  from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';

const PER_PAGE = 20;

class EmployeeList extends React.Component {
  render() {
    const { employees } = this.props;

    return (
      <div>
        <div className="employee-list">
          {
            employees.map((employee) => {
              return (
                <EmployeeDetail
                  key={employee._id}
                  employee={employee}
                />
              );
            })
          }
        </div>
        <button
          className="btn btn-primary"
          onClick={ this.onButtonClick }
        >
          Load more...
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.page = 1;
  }

  onButtonClick = () => {
    Meteor.subscribe('employees', PER_PAGE * ++this.page);
  };
}

EmployeeList = createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);

export default EmployeeList;