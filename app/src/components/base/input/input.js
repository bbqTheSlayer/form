import React, { Component } from 'react';

export default class BaseTextInput extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
        };
    }

    handleChange(e)
    {
        this.props.onChange(e.target.value);
    }

    getKey()
    {
        if (typeof this.props.KeyProp == 'string') {
            return this.props.KeyProp;
        } else {
            return '';
        }
    }

    getClassArray()
    {
        if (typeof this.props.ClassArray == 'object') {
            return this.props.ClassArray;
        } else {
            return [];
        }
    }

    getPlaceholder()
    {
        if (typeof this.props.TextHint == 'string') {
            return this.props.TextHint;
        } else {
            return '';
        }
    }

    render()
    {
        let ClassArray = ['form-control'].concat(this.getClassArray());

        const ClassString = ClassArray.join(' ');

        return (
            <input
              key={this.getKey()}
              className={ClassString}
              placeholder={this.getPlaceholder()}
              onChange={(e) => {
                this.handleChange(e);
              }}
              value={this.props.value}
              ></input>
        )
    }

}