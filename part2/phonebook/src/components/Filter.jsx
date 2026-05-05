const Filter = (props) => {
	return(
		<div>
			<p>
        filter shown with
        <input 
          value={props.searchValue}
          onChange={props.handleSearch}
        />
      </p>
		</div>
	)

}

export default Filter