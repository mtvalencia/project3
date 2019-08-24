import React, { Component } from 'react';

class Ticker extends Component {
    state = {
        countDown: ""
    }

    componentDidMount() {
        this.Countdown(this.props.golivedate);
    }

    Countdown(golivedate) {
        var countDownDate = new Date(golivedate).getTime();
        var x = setInterval(() => {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            let countdown = days + ": Days " + hours + ": Hours " + minutes + ": Minutes " + seconds + ": Seconds ";
            if (distance < 0) {
                clearInterval(x);
                this.setState({ countDown: 0 });
                return 0;
            }
            else {
                this.setState({ countDown: countdown });
                return countdown;
            }

        }, 1000);
    }

    render() {
        const {countDown} = this.state;
        const {Link : link, Status : status} = this.props;
        return (
            <p className="animated bounceInLeft delay-2s" style={{fontWeight:"bold", color:"red"}}> {countDown !== 0 && status === "Active" ? countDown : link } </p>
        );
    }
}

export default Ticker;