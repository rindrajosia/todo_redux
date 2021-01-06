//A-IV}REACT Component

//VisibilityFilters renders a simple set of filters:
//all, completed, and incomplete.
//Clicking on each one of them filters the todos:

//It accepts an activeFilter prop from the parent that
//indicates which filter is currently selected by the user.
//An active filter is rendered with an underscore.
//It dispatches the setFilter action to update the selected filter.

import React from  "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";

// D-IV] VisibilityFilters feature
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

//A-IV} ... component implementation
// D-IV} Let’s work on <VisibilityFilters /> Now:
//adding setFilter as props for dispatch
const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              /** waiting for setFilter handler*/
              // D-IV} Let’s work on <VisibilityFilters /> Now:
              //change l'etat du visibilityFilter lors du click
              setFilter(currentFilter);
            }}>
          {currentFilter}
          </span>
        );
      })}
    </div>
  )
};

// D-IV} Let’s work on <VisibilityFilters /> Now:
//mapStateToProps pour recuperer l'etat du visibilityFilter actuel
//et rend cet etat comme un objet dans le props activeFilter
const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};

//A-IV}REACT Component
//export default VisibilityFilters;

// D-IV} Let’s work on <VisibilityFilters /> Now:
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
