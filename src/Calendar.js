import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };
    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>arrow_left</div>
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="icon" onClick={this.nextMonth}>arrow_right</div>
            </div>
        );
    }
    
    renderDays() {}
    
    renderCells() {}
    
    onDateClick = day => {}
    
    nextMonth = () => {}
    
    prevMonth = () => {}

render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>

    );
  }
}

export default Calendar;