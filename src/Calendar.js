import React from "react";
import dateFns from "date-fns";
// import yargs = require("yargs");

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
    
    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>dateFns.format(dateFns.addDays(startDays, i), dateFormat)</div>
            );
        }
        return <div className="days row">{days}</div>;
    }
    
    renderCells() {}
    
    onDateClick = day => {}
    
    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }
    
    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

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