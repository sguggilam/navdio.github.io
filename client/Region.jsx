// A spoken region in an audio

Region = React.createClass({

render() {
	return (
		<p>
			Region Start time : {this.props.startTime} , end time : {this.props.endTime}
		</p>
	);
}

});