export default const App = (props) => {
	return {
		<div>
			<p>hello world!</p>
			{ JSON.stringify(props.history.location) }
		</div>
	}
};

	