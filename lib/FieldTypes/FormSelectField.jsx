import React from 'react';

var SelectOption = React.createClass({

  render: function() {

    return (
      <option 
        value={this.props.data.value} >
          
          {this.props.data.text}

      </option>
    );

  }

});

var FormSelectField = React.createClass({
  render: function() {
    var label = this.props.data.label;
    var type = this.props.data.type;
    var value = this.props.data.value;
    var attribute = this.props.data.attribute;

    var options = this.props.data.options.map( option => {
      return ( <SelectOption key={option.value} data={option} />);
    } );

    return (
      <div>
        <label>{label}</label>
        <select name={attribute} defaultValue={value}>
          {options}
        </select>
      </div>
    );
  }
});

export default FormSelectField;